import type { Request, Response } from "express";
import { buildHealthReport } from "../service/health.service";
export function healthController(_req: Request, res: Response) {
  buildHealthReport();
  res.json({
    message: "Health endpoint",
    status: "ok",
    uptime: 12345.67,
    timestamp: new Date().toISOString(),
  });
}
