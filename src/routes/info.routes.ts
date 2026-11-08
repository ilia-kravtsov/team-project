import express from "express";

export const infoRouter = express.Router()

infoRouter.get('/info', (req, res) => {
  res.json({
      name: "team-project-001",
      version: "1.0.0"
    })
})
