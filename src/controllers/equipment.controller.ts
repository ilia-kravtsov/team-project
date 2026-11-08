import type { RequestHandler } from "express";
import {
  createEquipmentFromService, deleteEquipmentFromService,
  getAllEquipmentFromService,
  getEquipmentByIdFromService
} from "../services/equipment.service.js";

export const getAllEquipment: RequestHandler = (req, res) => {
  const equipment = getAllEquipmentFromService();

  res.json(equipment)
}

export const getEquipmentById: RequestHandler = (req, res) => {
  const id = String(req.params.id)
  const equipmentById = getEquipmentByIdFromService(id);

  if (!equipmentById) {
    res.status(404).json({
      error: "EQUIPMENT_NOT_FOUND"
    })

    return;
  }

  res.json(equipmentById)
}

export const createEquipment: RequestHandler = (req, res) => {
    const newEquipment = createEquipmentFromService(req.body)

    res.status(201).json(newEquipment)
}

export const deleteEquipment: RequestHandler = (req, res) => {
  const id = String(req.params.id)
  const result = deleteEquipmentFromService(id)

  if (!result) {
    res.status(404).json({
      message: "EQUIPMENT_NOT_FOUND"
    })

    return;
  }

  res.status(204).end();
}