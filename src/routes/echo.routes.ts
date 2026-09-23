import { Router } from "express";
import { echoController } from "../controller/echo.controller";
const router = Router();

router.get("/echo", echoController);

export default router;
