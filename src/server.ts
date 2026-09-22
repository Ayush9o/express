const express = require("express");
import type { Request, Response } from "express";
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} (${NODE_ENV})`);
});
