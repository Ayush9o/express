import express, { Application, Request, Response } from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes";
import echoRoutes from "./routes/echo.routes";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
  res.json({
    message: "server",
    status: "running",
  });
});
app.use("/api", healthRoutes);
app.use("/api", echoRoutes);
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Route not found ${req}`,
  });
});

export default app;
