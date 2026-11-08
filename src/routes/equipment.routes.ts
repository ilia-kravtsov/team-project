import { Router } from "express"
import {
  getAllEquipment,
  getEquipmentById
} from "../controllers/equipment.controller.js";

export const equipmentRouter = Router();

equipmentRouter.get('/', getAllEquipment);
equipmentRouter.get('/:id', getEquipmentById);