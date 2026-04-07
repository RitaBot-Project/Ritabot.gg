import { Router, type Request, type Response } from "express";
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

router.post("/translate/google", async (req: Request, res: Response) => {
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
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          q: [validation.text],
          source: validation.source,
          target: validation.target,
        }),
      }
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

router.post("/translate/deepl", async (req: Request, res: Response) => {
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
    const response = await fetch("https://api.deepl.com/v2/translate", {
      method: "POST",
      headers: {
        "Authorization": `DeepL-Auth-Key ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: [validation.text],
        source_lang: validation.source,
        target_lang: validation.target,
      }),
    });

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

export default router;
