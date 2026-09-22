import type { Request, Response } from "express";

export function healthController(req: Request, res: Response) {
  res.json({
    message: "Health endpoint",
    status: "ok",
    uptime: 12345.67,
    timestamp: new Date().toISOString(),
  });
}
