import type {
  ClientEquipment,
  Equipment,
  PatchEquipment
} from "../types/equipment.types.js";
import { randomUUID } from "node:crypto";

let equipment: Equipment[] = [
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

export function createEquipmentFromService(userPayload: ClientEquipment): Equipment {
  const newEquipment = {
    id: randomUUID(),
    name: userPayload.name,
    type: userPayload.type,
    status: userPayload.status
  }

  equipment.push(newEquipment);

  return newEquipment
}

export function updateEquipmentFromService(userPayload: PatchEquipment, id: string) {
  const updatedEquipment = equipment.find(item => item.id === id)

  if (!updatedEquipment) {
    return undefined;
  }

  Object.assign(updatedEquipment, userPayload);

  return updatedEquipment;
}

export function deleteEquipmentFromService(id: string): boolean {
  const index = equipment.findIndex(item => item.id === id);

  if (index === -1) {
    return false;
  }

  equipment.splice(index, 1);

  return true;
}