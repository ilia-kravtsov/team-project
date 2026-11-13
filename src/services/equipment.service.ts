import type {
  Equipment,
} from "../types/equipment.types.js";
import {
  ClientEquipment,
  PatchEquipment
} from "../schemas/equipment.schema.js";
import {
  createEquipment, deleteEquipment,
  findAllEquipment,
  findEquipmentById,
  updateEquipment
} from "../repositories/equipment.repository.js";

export async function getAllEquipmentFromService(): Promise<Equipment[]> {
  return await findAllEquipment();
}

export async function getEquipmentByIdFromService(id: string): Promise<Equipment | undefined> {
  return await findEquipmentById(id);
}

export async function createEquipmentFromService(userPayload: ClientEquipment): Promise<Equipment | undefined> {
  return await createEquipment(userPayload)
}

export async function updateEquipmentFromService(id: string, userPayload: PatchEquipment): Promise<Equipment | undefined> {
  return await updateEquipment(id, userPayload)
}

export async function deleteEquipmentFromService(id: string): Promise<boolean> {
  return await deleteEquipment(id)
}