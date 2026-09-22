import type { Request, Response } from "express";

export function echoController(req: Request, res: Response) {
  res.json({
    message: "Echo endpoint",
    timestamp: new Date().toISOString(),
    data: req.body,
  });
}
