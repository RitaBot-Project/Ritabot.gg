#!/usr/bin/env node
import { spawn } from "node:child_process";
import { existsSync, readFileSync, rmSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const isWin = process.platform === "win32";
const COREPACK_BIN = isWin ? "corepack.cmd" : "corepack";

let apiProc = null;
let webProc = null;
let shuttingDown = false;
let shutdownPromise = null;

function loadDotEnvFile(relativeFilePath) {
  const filePath = path.resolve(process.cwd(), relativeFilePath);
  if (!existsSync(filePath)) {
    return {};
  }

  const parsed = {};
  const raw = readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf("=");
    if (separator <= 0) continue;

    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    parsed[key] = value;
  }

  return parsed;
}

function log(prefix, message) {
  const text = String(message ?? "").trimEnd();
  if (!text) return;
  process.stdout.write(`[${prefix}] ${text}\n`);
}

function wirePrefixedStream(stream, prefix) {
  if (!stream) return;
  stream.setEncoding("utf8");
  let buffer = "";

  stream.on("data", (chunk) => {
    buffer += chunk;
    const lines = buffer.split(/\r?\n/);
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      log(prefix, line);
    }
  });

  stream.on("end", () => {
    if (buffer.length > 0) {
      log(prefix, buffer);
      buffer = "";
    }
  });
}

function spawnLogged(command, args, options, prefix) {
  const child = spawn(command, args, {
    ...options,
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true,
  });

  child.on("error", (err) => {
    log(prefix, `process error: ${err.message}`);
  });

  wirePrefixedStream(child.stdout, prefix);
  wirePrefixedStream(child.stderr, `${prefix}:err`);

  return child;
}

function getCorepackCommandArgs(args) {
  if (!isWin) {
    return { command: COREPACK_BIN, args };
  }

  const escaped = args
    .map((part) => (part.includes(" ") ? `\"${part}\"` : part))
    .join(" ");

  return {
    command: "cmd.exe",
    args: ["/d", "/s", "/c", `corepack ${escaped}`],
  };
}

function runCommandAndWait(command, args, options, prefix) {
  return new Promise((resolve) => {
    const child = spawnLogged(command, args, options, prefix);
    child.on("exit", (code, signal) => resolve({ code, signal }));
  });
}

function waitForExit(child) {
  return new Promise((resolve) => {
    if (!child || child.exitCode !== null || child.signalCode !== null) {
      resolve();
      return;
    }

    child.once("exit", () => resolve());
  });
}

function runTaskkill(pid, force) {
  return new Promise((resolve) => {
    const args = ["/PID", String(pid), "/T"];
    if (force) args.push("/F");

    const killer = spawn("taskkill", args, { stdio: "ignore", windowsHide: true });
    killer.on("error", () => resolve(false));
    killer.on("exit", (code) => resolve(code === 0));
  });
}

async function stopChild(child, name) {
  if (!child) return;
  if (child.exitCode !== null || child.signalCode !== null) return;

  log("local-dev", `stopping ${name} (pid ${child.pid})`);

  if (isWin) {
    const graceful = await runTaskkill(child.pid, false);
    if (!graceful) {
      await runTaskkill(child.pid, true);
    }
    await waitForExit(child);
    return;
  }

  child.kill("SIGTERM");

  const exited = await Promise.race([
    waitForExit(child).then(() => true),
    new Promise((resolve) => setTimeout(() => resolve(false), 5000)),
  ]);

  if (!exited) {
    log("local-dev", `${name} did not exit after SIGTERM, sending SIGKILL`);
    child.kill("SIGKILL");
    await waitForExit(child);
  }
}

function childExitCode(code, signal) {
  if (typeof code === "number") return code;
  if (signal) return 1;
  return 0;
}

function requestShutdown(reason, exitCode = 0) {
  if (shutdownPromise) return shutdownPromise;
  shuttingDown = true;

  shutdownPromise = (async () => {
    log("local-dev", `shutdown requested: ${reason}`);
    await Promise.allSettled([
      stopChild(webProc, "web server"),
      stopChild(apiProc, "api server"),
    ]);
    log("local-dev", "all child processes stopped");
    process.exit(exitCode);
  })();

  return shutdownPromise;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const shouldClean = args.has("--clean");

  const dotEnvValues = loadDotEnvFile(".env.local");
  const baseEnv = { ...process.env, ...dotEnvValues };

  if (Object.keys(dotEnvValues).length > 0) {
    log("local-dev", "loaded .env.local");
  }

  if (shouldClean) {
    log("local-dev", "cleaning API dist folder");
    rmSync(path.resolve(process.cwd(), "artifacts/api-server/dist"), {
      recursive: true,
      force: true,
    });
  }

  log("local-dev", "building api package");

  const buildCmd = getCorepackCommandArgs([
    "pnpm",
    "--filter",
    "@workspace/api-server",
    "run",
    "build",
  ]);

  const build = await runCommandAndWait(
    buildCmd.command,
    buildCmd.args,
    { env: baseEnv },
    "build",
  );

  if (build.code !== 0) {
    const failCode = childExitCode(build.code, build.signal) || 1;
    log("local-dev", `build failed (code=${build.code}, signal=${build.signal ?? "none"})`);
    process.exit(failCode);
  }

  log("local-dev", "starting api server");
  const apiEnv = {
    ...baseEnv,
    NODE_ENV: "development",
    PORT: baseEnv.PORT ?? "8080",
  };

  apiProc = spawnLogged(
    process.execPath,
    ["--enable-source-maps", "artifacts/api-server/dist/index.mjs"],
    { env: apiEnv },
    "api",
  );

  log("local-dev", "starting web dev server");

  const webCmd = getCorepackCommandArgs([
    "pnpm",
    "--filter",
    "@workspace/ritabot-homepage",
    "run",
    "dev",
  ]);

  webProc = spawnLogged(
    webCmd.command,
    webCmd.args,
    { env: baseEnv },
    "web",
  );

  apiProc.on("exit", (code, signal) => {
    log("local-dev", `api server exited (code=${code}, signal=${signal ?? "none"})`);
    if (!shuttingDown) {
      void requestShutdown("api server exited unexpectedly", childExitCode(code, signal) || 1);
    }
  });

  webProc.on("exit", (code, signal) => {
    log("local-dev", `web dev server exited (code=${code}, signal=${signal ?? "none"})`);
    if (!shuttingDown) {
      void requestShutdown("web dev server exited unexpectedly", childExitCode(code, signal) || 1);
    }
  });

  process.on("SIGINT", () => {
    void requestShutdown("SIGINT", 0);
  });

  process.on("SIGTERM", () => {
    void requestShutdown("SIGTERM", 0);
  });

  process.on("uncaughtException", (err) => {
    log("local-dev", `uncaught exception: ${err?.stack || err}`);
    void requestShutdown("uncaught exception", 1);
  });

  process.on("unhandledRejection", (reason) => {
    log("local-dev", `unhandled rejection: ${reason}`);
    void requestShutdown("unhandled rejection", 1);
  });
}

main().catch((err) => {
  log("local-dev", `fatal startup error: ${err?.stack || err}`);
  process.exit(1);
});
