import type {RequestHandler} from "express";
import type {EquipmentParams} from "../types/equipment.types.js"
import {updateEquipmentSchema} from "../schemas/equipment.schema.js";

export const validateEquipmentForPartialUpdate: RequestHandler<EquipmentParams> = (req, res, next) => {
  const result = updateEquipmentSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      details: result.error.issues
    })
    return;
  }

  req.body = result.data;

  next()
}