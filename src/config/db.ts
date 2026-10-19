import mongoose from "mongoose";
import { env } from "./env";
export async function connectedDB(): Promise<void> {
  try {
    if (!env.mongoUri) {
      throw new Error();
    }
    const conn = await mongoose.connect(env.mongoUri);
    console.log("DB connected........");
  } catch (error) {
    console.log("[DB] Error......",error);
    process.exit(1);
  }
}
export async function disconnectDB(): Promise<void> {
  await mongoose.disconnect();
  console.log("DB disconnected");
}
