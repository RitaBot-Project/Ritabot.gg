import { Router, type Request, type Response as ExpressResponse } from "express";
import { logger } from "../lib/logger";

const router = Router();

const VALID_LANG_CODES = new Set([
  "en", "de", "fr", "es", "zh-CN", "zh-TW", "ru", "it", "pt", "ro",
  "ja", "ko", "vi", "id", "bg", "cs",
  "EN", "DE", "FR", "ES", "ZH", "ZH-CN", "ZH-TW", "RU", "IT", "PT", "RO",
  "JA", "KO", "VI", "ID", "BG", "CS",
  "EN-GB", "PT-PT", "ZH-HANS", "ZH-HANT",
]);

const MAX_TEXT_LENGTH = 200;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkServerRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }

  if (entry.count >= 10) {
    return false;
  }

  entry.count++;
  return true;
}

function getClientIp(req: Request): string {
  return req.ip || "unknown";
}

function validateBody(body: Record<string, unknown>): { text: string; source: string; target: string } | string {
  const { text, source, target } = body;

  if (typeof text !== "string" || !text.trim()) {
    return "Missing or empty 'text' field";
  }
  if (text.length > MAX_TEXT_LENGTH) {
    return `Text exceeds maximum length of ${MAX_TEXT_LENGTH} characters`;
  }
  if (typeof source !== "string" || !VALID_LANG_CODES.has(source)) {
    return `Invalid 'source' language code: ${source}`;
  }
  if (typeof target !== "string" || !VALID_LANG_CODES.has(target)) {
    return `Invalid 'target' language code: ${target}`;
  }

  return { text: text.trim(), source, target };
}

interface FetchResponse {
  ok: boolean;
  status: number;
  text(): Promise<string>;
  json(): Promise<unknown>;
}

async function httpPost(url: string, headers: Record<string, string>, body: string): Promise<FetchResponse> {
  const res = await globalThis.fetch(url, {
    method: "POST",
    headers,
    body,
  });
  return res as unknown as FetchResponse;
}

router.post("/translate/google", async (req: Request, res: ExpressResponse) => {
  const ip = getClientIp(req);
  if (!checkServerRateLimit(ip)) {
    res.status(429).json({ error: "Rate limit exceeded. Please try again later." });
    return;
  }

  const validation = validateBody(req.body as Record<string, unknown>);
  if (typeof validation === "string") {
    res.status(400).json({ error: validation });
    return;
  }

  const apiKey = process.env["GOOGLE_API_KEY"];
  if (!apiKey) {
    logger.error("GOOGLE_API_KEY is not configured");
    res.status(500).json({ error: "Translation service is not configured" });
    return;
  }

  try {
    const response = await httpPost(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      { "Content-Type": "application/json; charset=utf-8" },
      JSON.stringify({
        q: [validation.text],
        source: validation.source,
        target: validation.target,
      })
    );

    if (!response.ok) {
      const errorBody = await response.text();
      logger.error({ status: response.status, body: errorBody }, "Google Translate API error");
      res.status(502).json({ error: "Translation service returned an error" });
      return;
    }

    const data = await response.json() as {
      data?: { translations?: Array<{ translatedText?: string }> }
    };

    const translated = data?.data?.translations?.[0]?.translatedText;
    if (!translated) {
      logger.error({ data }, "Unexpected Google Translate response format");
      res.status(502).json({ error: "Unexpected response from translation service" });
      return;
    }

    res.json({ translation: translated });
  } catch (err) {
    logger.error({ err }, "Google Translate request failed");
    res.status(502).json({ error: "Failed to reach translation service" });
  }
});

router.post("/translate/deepl", async (req: Request, res: ExpressResponse) => {
  const ip = getClientIp(req);
  if (!checkServerRateLimit(ip)) {
    res.status(429).json({ error: "Rate limit exceeded. Please try again later." });
    return;
  }

  const validation = validateBody(req.body as Record<string, unknown>);
  if (typeof validation === "string") {
    res.status(400).json({ error: validation });
    return;
  }

  const apiKey = process.env["DEEPL_API_KEY"];
  if (!apiKey) {
    logger.error("DEEPL_API_KEY is not configured");
    res.status(500).json({ error: "Translation service is not configured" });
    return;
  }

  try {
    const response = await httpPost(
      "https://api.deepl.com/v2/translate",
      {
        "Authorization": `DeepL-Auth-Key ${apiKey}`,
        "Content-Type": "application/json",
      },
      JSON.stringify({
        text: [validation.text],
        source_lang: validation.source,
        target_lang: validation.target,
      })
    );

    if (!response.ok) {
      const errorBody = await response.text();
      logger.error({ status: response.status, body: errorBody }, "DeepL API error");
      res.status(502).json({ error: "Translation service returned an error" });
      return;
    }

    const data = await response.json() as {
      translations?: Array<{ text?: string }>
    };

    const translated = data?.translations?.[0]?.text;
    if (!translated) {
      logger.error({ data }, "Unexpected DeepL response format");
      res.status(502).json({ error: "Unexpected response from translation service" });
      return;
    }

    res.json({ translation: translated });
  } catch (err) {
    logger.error({ err }, "DeepL request failed");
    res.status(502).json({ error: "Failed to reach translation service" });
  }
});

router.post("/translate/ml", async (req: Request, res: ExpressResponse) => {
  const ip = getClientIp(req);
  if (!checkServerRateLimit(ip)) {
    res.status(429).json({ error: "Rate limit exceeded. Please try again later." });
    return;
  }

  const validation = validateBody(req.body as Record<string, unknown>);
  if (typeof validation === "string") {
    res.status(400).json({ error: validation });
    return;
  }

  const mlServer = process.env["ML_SERVER"];
  const apiKey = process.env["ML_API_KEY"];
  if (!mlServer || !apiKey) {
    logger.error("ML_SERVER or ML_API_KEY is not configured");
    res.status(500).json({ error: "Translation service is not configured" });
    return;
  }

  try {
    const params = new URLSearchParams({
      API_KEY: apiKey,
      langTo: validation.target.toLowerCase(),
      langFrom: validation.source.toLowerCase(),
    });

    const response = await httpPost(
      `${mlServer}/translate?${params.toString()}`,
      { "Content-Type": "application/json; charset=utf-8" },
      JSON.stringify({ "X-Translate-Text": validation.text })
    );

    if (!response.ok) {
      const errorBody = await response.text();
      logger.error({ status: response.status, body: errorBody }, "ML API error");
      res.status(502).json({ error: "Translation service returned an error" });
      return;
    }

    const data = await response.json() as [unknown, { data?: { translations?: Array<{ translatedText?: string }> } }];

    const translated = data?.[1]?.data?.translations?.[0]?.translatedText;
    if (!translated) {
      logger.error({ data }, "Unexpected ML response format");
      res.status(502).json({ error: "Unexpected response from translation service" });
      return;
    }

    res.json({ translation: translated });
  } catch (err) {
    logger.error({ err }, "ML request failed");
    res.status(502).json({ error: "Failed to reach translation service" });
  }
});

export default router;
