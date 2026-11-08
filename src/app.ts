import express from "express";
import { router } from "./routes/info.routes.js";
import { notFound } from "./middleware/not-found.js";

export const app = express();

app.get('/health', (req, res) => {
  res.json({
    status: "ok"
  })
})

app.use('/api', router)

app.use(notFound)