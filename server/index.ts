import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import cors from "cors";

const app = express();

// Security + performance middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());

// Basic rate limiting (adjust as needed)
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Optional CORS (enable via CORS_ORIGIN)
if (process.env.CORS_ORIGIN) {
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN.split(",").map((o) => o.trim()),
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    }),
  );
}

// Cache control for static assets
app.use((req, res, next) => {
  // Set cache headers for static assets
  if (req.path.match(/\.(js|css|ico|jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot|mp4|webm|avi|mov)$/)) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  } else if (req.path.match(/\.(html)$/)) {
    res.setHeader("Cache-Control", "no-cache");
  }
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      const logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      log(logLine.length > 120 ? logLine.slice(0, 119) + "…" : logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err?.status || err?.statusCode || 500;
    const message = err?.message || "Internal Server Error";
    try {
      if (!res.headersSent) {
        res.status(status).json({ message });
      }
    } finally {
      // Log error without crashing the process
      console.error("[error]", { status, message, stack: err?.stack });
    }
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
