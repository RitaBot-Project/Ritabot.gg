import { Router, type IRouter } from "express";

const VERSION = "2.1.0";

const router: IRouter = Router();

router.get("/healthz", (_req, res) => {
  const google = !!process.env.GOOGLE_API_KEY;
  const deepl = !!process.env.DEEPL_API_KEY;
  const ml = !!(process.env.ML_SERVER && process.env.ML_API_KEY);

  res.json({
    status: "ok",
    version: VERSION,
    engines: {
      google: google ? "connected" : "not configured",
      ml: ml ? "connected" : "not configured",
      deepl: deepl ? "connected" : "not configured",
    },
  });
});

export default router;
