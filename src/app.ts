import express from "express";
import { router } from "./routes/info.routes.js";

export const app = express();

app.get('/health', (req, res) => {
  res.json({
    status: "ok"
  })
})

app.use('/api', router)