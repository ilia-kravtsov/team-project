import { Router } from "express"
import {
  createEquipment,
  getAllEquipment,
  getEquipmentById
} from "../controllers/equipment.controller.js";

export const equipmentRouter = Router();

equipmentRouter.get('/', getAllEquipment);
equipmentRouter.get('/:id', getEquipmentById);
equipmentRouter.post('/', createEquipment);