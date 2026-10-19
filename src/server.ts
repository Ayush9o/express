import app from "./app";
import { User } from "./model/User.model";
import "dotenv/config";
import { connectedDB } from "./config/db";
import { env } from "./config/env";

async function Start(): Promise<void> {
  try {
    await connectedDB();

    app.listen(env.port, () => {
      console.log(`Server is running on http://localhost:)`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
  }
}

void Start();
