import { env } from "../config/env";
export interface echo {
  message: string;
  data: string;
  timestamp: string;
}

export function buildEcho(req: { body: string }): echo {
  return {
    message: "echo endpoint",
    data: req.body,
    timestamp: new Date().toISOString(),
  };
}
