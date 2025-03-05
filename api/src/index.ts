import "dotenv/config";
import express from "express";
import router from "./router";

const app = express();
const port = process.env.EXPRESS_SERVER_PORT || 3000;

app.get('/', (req, res) => {
  res.send('salut les geeks');
});

app.use("/api", router)

app.listen(port, () => {
  console.info(`Server is running on port http://localhost:${port}`);
});
