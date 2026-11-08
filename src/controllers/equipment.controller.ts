import type { RequestHandler } from "express";
import {getAllEquipmentFromService, getEquipmentByIdFromService} from "../services/equipment.service.js";

export const getAllEquipment: RequestHandler = (req, res) => {
  const equipment = getAllEquipmentFromService();

  res.json(equipment)
}

export const getEquipmentById: RequestHandler = (req, res) => {
  const id = Number(req.params.id)
  const equipmentById = getEquipmentByIdFromService(id);

  if (!equipmentById) {
    res.status(404).json({
      error: "EQUIPMENT_NOT_FOUND"
    })

    return;
  }

  res.json(equipmentById)
}