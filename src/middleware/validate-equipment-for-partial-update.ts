import type {RequestHandler} from "express";
import type {EquipmentParams} from "../types/equipment.types.js"
import {updateEquipmentSchema} from "../schemas/equipment.schema.js";
// Zod проверяет, что данные в body имеют допустимые значения согласно схемы, и передаёт управление через next()
export const validateEquipmentForPartialUpdate: RequestHandler<EquipmentParams> = (req, res, next) => {
  // safeParse не выбрасывает исключение, возвращая объект с результатом,
  // a parse при ошибке выбрасывает исключение ZodError, требующее блок try/catch
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