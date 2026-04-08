import type { VercelRequest, VercelResponse } from "@vercel/node";

const VALID_LANG_CODES = new Set([
  "en", "de", "fr", "es", "zh-CN", "zh-TW", "ru", "it", "pt", "ro",
  "ja", "ko", "vi", "id", "bg", "cs",
  "EN", "DE", "FR", "ES", "ZH", "ZH-CN", "ZH-TW", "RU", "IT", "PT", "RO",
  "JA", "KO", "VI", "ID", "BG", "CS",
  "EN-GB", "PT-PT", "ZH-HANS", "ZH-HANT",
]);

const MAX_TEXT_LENGTH = 200;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= 10) return false;
  entry.count++;
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const ip = (req.headers["x-forwarded-for"] as string || "unknown").split(",")[0].trim();
  if (!checkRateLimit(ip)) {
    res.status(429).json({ error: "Rate limit exceeded. Please try again later." });
    return;
  }

  const { text, source, target } = req.body || {};

  if (typeof text !== "string" || !text.trim()) {
    res.status(400).json({ error: "Missing or empty 'text' field" });
    return;
  }
  if (text.length > MAX_TEXT_LENGTH) {
    res.status(400).json({ error: `Text exceeds maximum length of ${MAX_TEXT_LENGTH} characters` });
    return;
  }
  if (typeof source !== "string" || !VALID_LANG_CODES.has(source)) {
    res.status(400).json({ error: `Invalid 'source' language code: ${source}` });
    return;
  }
  if (typeof target !== "string" || !VALID_LANG_CODES.has(target)) {
    res.status(400).json({ error: `Invalid 'target' language code: ${target}` });
    return;
  }

  const mlServer = process.env["ML_SERVER"];
  const apiKey = process.env["ML_API_KEY"];
  if (!mlServer || !apiKey) {
    res.status(500).json({ error: "Translation service is not configured" });
    return;
  }

  try {
    const params = new URLSearchParams({
      API_KEY: apiKey,
      langTo: target.toLowerCase(),
      langFrom: source.toLowerCase(),
    });

    const response = await fetch(`${mlServer}/translate?${params.toString()}`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ "X-Translate-Text": text.trim() }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("ML API error", response.status, errorBody);
      res.status(502).json({ error: "Translation service returned an error" });
      return;
    }

    const data: any = await response.json();
    const translated = data?.[1]?.data?.translations?.[0]?.translatedText;

    if (!translated) {
      console.error("Unexpected ML response format", JSON.stringify(data));
      res.status(502).json({ error: "Unexpected response from translation service" });
      return;
    }

    res.status(200).json({ translation: translated });
  } catch (err) {
    console.error("ML request failed", err);
    res.status(502).json({ error: "Failed to reach translation service" });
  }
}
