import app from "./app";

const PORT = Number(process.env.PORT) || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} (${NODE_ENV})`);
});
