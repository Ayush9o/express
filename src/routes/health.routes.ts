import { Router } from "express";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({
    message: "Health endpoint",
    status: "ok",
    uptime: 12345.67,
    timestamp: new Date().toISOString(),
  });
});

export default router;
