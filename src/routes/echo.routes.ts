import { Router } from "express";
import { echoController } from "../controller/echo.controller";
const router = Router();

router.get("/health", echoController);

export default router;
