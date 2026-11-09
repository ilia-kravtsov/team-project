import { Router } from "express"
import {
  createEquipment,
  getAllEquipment,
  getEquipmentById,
  deleteEquipment,
  updateEquipment
} from "../controllers/equipment.controller.js";
import {validateEquipment} from "../middleware/validate-equipment.js";
import {validateEquipmentForPartialUpdate} from "../middleware/validate-equipment-for-partial-update.js";
import type { EquipmentParams } from "../types/equipment.types.js";

export const equipmentRouter = Router();

equipmentRouter.get('/', getAllEquipment);
equipmentRouter.get<EquipmentParams>('/:id', getEquipmentById);
equipmentRouter.post('/', validateEquipment, createEquipment);
equipmentRouter.patch<EquipmentParams>('/:id', validateEquipmentForPartialUpdate, updateEquipment);
equipmentRouter.delete<EquipmentParams>('/:id', deleteEquipment);