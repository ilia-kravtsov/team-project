import type {
  CreateEquipment,
  Equipment
} from "../types/equipment.types.js";
import { randomUUID } from "node:crypto";

const equipment: Equipment[] = [
  { id: randomUUID(), name: "Generator G-001", type: "generator", status: "active" },
  { id: randomUUID(), name: "Transformer T-001", type: "transformer", status: "maintenance" },
  { id: randomUUID(), name: "Turbine W-001", type: "turbine", status: "inactive" }
];

export function getAllEquipmentFromService(): Equipment[] {
  return equipment;
}

export function getEquipmentByIdFromService(id: string): Equipment | undefined {
  return equipment.find(item => item.id === id);
}

export function createEquipmentFromService(userPayload: CreateEquipment): Equipment {
  const newEquipment = {
    id: randomUUID(),
    name: userPayload.name,
    type: userPayload.type,
    status: userPayload.status
  }

  equipment.push(newEquipment);

  return newEquipment
}

export function deleteEquipmentFromService(id: string): boolean {
  const index = equipment.findIndex(item => item.id === id);

  if (index === -1) {
    return false;
  }

  equipment.splice(index, 1);

  return true;
}