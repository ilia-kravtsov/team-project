import type { RequestHandler } from "express";
import {createEquipmentSchema} from "../schemas/equipment.schema.js";

export const validateEquipment: RequestHandler = (req, res, next) => {
  const result = createEquipmentSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      details: result.error.issues
    })
    return;
  }

  req.body = result.data

  next()
}