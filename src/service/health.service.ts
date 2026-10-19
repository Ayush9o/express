import { env } from "../config/env";
export interface HealthRecord {
  status: "ok";
  message: string;
  env: string;
  timestamp: string;
}

export function buildHealthReport(): HealthRecord {
  return {
    message: "Health endpoint",
    status: "ok",
    env: env.node_env,
    timestamp: new Date().toISOString(),
  };
}
