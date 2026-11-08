import express from "express";
import { infoRouter } from "./routes/info.routes.js";
import { notFound } from "./middleware/not-found.js";
import { errorHandler } from "./middleware/error-handler.js";
import { equipmentRouter } from "./routes/equipment.routes.js";

export const app = express();

app.get('/health', (req, res) => {
  res.json({
    status: "ok"
  })
})

app.use('/api', infoRouter);
app.use('/api/equipment', equipmentRouter);

app.use(notFound)
app.use(errorHandler)