import type { RequestHandler } from "express";
import type { EquipmentParams } from "../types/equipment.types.js"
import {
  EquipmentStatuses,
  EquipmentTypes
} from "../types/equipment.types.js";

const isPlainObject = (value: unknown) => {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value)
  );
};

export const validateEquipmentForPartialUpdate: RequestHandler<EquipmentParams> = (req, res, next) => {
  if (!isPlainObject(req.body)) {
    return res.status(400).json({ error: 'Body должен быть объектом' });
  }

  const isEmptyUpdate = Object.keys(req.body).length === 0;

  if (isEmptyUpdate) {
    res.status(400).json({
      "error": "EMPTY_UPDATE"
    })
    return;
  }

  const userPayload = req.body;

  const allowedFields = ["name", "type", "status"];

  const fields = Object.keys(req.body);

  const hasUnknownFields = fields.some(
    field => !allowedFields.includes(field)
  )

  if (hasUnknownFields) {
    res.status(400).json({
      "error": "UNKNOWN_EQUIPMENT_FIELD"
    })
    return;
  }

  if (Object.hasOwn(userPayload, "name")) {
    if (
      typeof userPayload?.name !== "string" ||
      userPayload.name.trim() === ""
    ) {
      res.status(400).json({
        error: "INVALID_EQUIPMENT_NAME"
      });
      return;
    }
  }

  if (Object.hasOwn(userPayload, "type")) {
    if (!EquipmentTypes.includes(userPayload?.type)) {
      res.status(400).json({
        error: "INVALID_EQUIPMENT_TYPE"
      })
      return;
    }
  }

  if (Object.hasOwn(userPayload, "status")) {
    if (!EquipmentStatuses.includes(userPayload?.status)) {
      res.status(400).json({
        error: "INVALID_EQUIPMENT_STATUS"
      })
      return;
    }
  }

  next()
}