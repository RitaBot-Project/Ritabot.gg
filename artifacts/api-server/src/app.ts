import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.set("trust proxy", true);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pinoHttpFn = pinoHttp as any;
app.use(
  pinoHttpFn({
    logger,
    serializers: {
      req(req: { id: unknown; method: string; url?: string }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: { statusCode: number }) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors({
  origin: [
    "https://ritabot.gg",
    "https://www.ritabot.gg",
    /\.replit\.dev$/,
    /\.worf\.replit\.dev$/,
    /localhost/,
  ],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
