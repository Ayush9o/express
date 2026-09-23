import type { Request, Response } from "express";
import { buildEcho } from "../service/echo.service";
export function echoController(req: Request, res: Response) {
  buildEcho(req);
  res.json({
    message: "Echo endpoint",
    timestamp: new Date().toISOString(),
    data: req.body,
  });
}
