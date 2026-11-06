import express from "express";

export const router = express.Router()

router.get('/info', (req, res) => {
  res.json({
      name: "team-project-001",
      version: "1.0.0"
    })
})
