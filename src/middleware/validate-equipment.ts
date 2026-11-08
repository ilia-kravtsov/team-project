import type { RequestHandler } from "express";
import { EquipmentStatuses, EquipmentTypes} from "../types/equipment.types.js";

export const validateEquipment: RequestHandler = (req, res, next) => {
  const userPayload = req.body;

  if (
    typeof userPayload?.name !== "string" ||
    userPayload.name.trim() === ""
  ) {
    res.status(400).json({
      error: "INVALID_EQUIPMENT_NAME"
    });
    return;
  }

  if (!EquipmentTypes.includes(userPayload?.type)) {
    res.status(400).json({
      error: "INVALID_EQUIPMENT_TYPE"
    })
    return;
  }

  if (!EquipmentStatuses.includes(userPayload?.status)) {
    res.status(400).json({
      error: "INVALID_EQUIPMENT_STATUS"
    })
    return;
  }

  next()
}