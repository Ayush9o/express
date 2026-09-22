import { Router } from "express";

const router = Router();

router.post("/echo", (req, res) => {
    res.json({
        message: "Echo endpoint",
        data: req.body,
    });
});

export default router;