import type { RequestHandler } from "express";
import {
  createEquipmentFromService,
  deleteEquipmentFromService,
  getAllEquipmentFromService,
  getEquipmentByIdFromService,
  updateEquipmentFromService
} from "../services/equipment.service.js";
import {
  EquipmentParams,
} from "../types/equipment.types.js";
import {PatchEquipment} from "../schemas/equipment.schema.js";

export const getAllEquipment: RequestHandler = async (req, res) => {
  const equipment = await getAllEquipmentFromService();

  res.json(equipment)
}

export const getEquipmentById: RequestHandler<EquipmentParams> = async (req, res) => {
  const id = req.params.id;
  const equipmentById = await getEquipmentByIdFromService(id);

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

export const updateEquipment: RequestHandler<EquipmentParams> = (req, res) => {
  const userPayload = req.body;
  const id = req.params.id;

  const payload: PatchEquipment = {}

  if (Object.hasOwn(userPayload, "name")) {
    payload.name = userPayload.name;
  }

  if (Object.hasOwn(userPayload, "type")) {
    payload.type = userPayload.type;
  }

  if (Object.hasOwn(userPayload, "status")) {
    payload.status = userPayload.status;
  }

  const updatedEquipment = updateEquipmentFromService(payload, id);

  if (!updatedEquipment) {
    res.status(404).json({
      message: "EQUIPMENT_NOT_FOUND"
    })

    return;
  }

  res.json(updatedEquipment)
}

export const deleteEquipment: RequestHandler<EquipmentParams> = (req, res) => {
  const id = req.params.id;
  const result = deleteEquipmentFromService(id)

  if (!result) {
    res.status(404).json({
      message: "EQUIPMENT_NOT_FOUND"
    })

    return;
  }

  res.status(204).end();
}