import{env}from "../config/env";
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
        env:env.NODE_ENV,
        timestamp: new Date().toISOString(),
    };
}