import dotenv from "dotenv";

dotenv.config();

export const env = {
    port: process.env.PORT ?? 5000,
    node_env: process.env.NODE_ENV ?? "development",
   mongoUri: process.env.MONGO_URI
} as const;