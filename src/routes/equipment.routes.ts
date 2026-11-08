import { Router } from "express"
import {
  createEquipment,
  getAllEquipment,
  getEquipmentById,
  deleteEquipment
} from "../controllers/equipment.controller.js";
import {validateEquipment} from "../middleware/validate-equipment.js";

export const equipmentRouter = Router();

equipmentRouter.get('/', getAllEquipment);
equipmentRouter.get('/:id', getEquipmentById);
equipmentRouter.post('/', validateEquipment, createEquipment);
equipmentRouter.delete('/:id', deleteEquipment);