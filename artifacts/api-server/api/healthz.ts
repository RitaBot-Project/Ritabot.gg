import type { VercelRequest, VercelResponse } from "@vercel/node";

const VERSION = "2.1.0";

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const google = !!process.env.GOOGLE_API_KEY;
  const deepl = !!process.env.DEEPL_API_KEY;
  const ml = !!(process.env.ML_SERVER && process.env.ML_API_KEY);

  res.status(200).json({
    status: "ok",
    version: VERSION,
    engines: {
      google: google ? "connected" : "not configured",
      ml: ml ? "connected" : "not configured",
      deepl: deepl ? "connected" : "not configured",
    },
  });
}
