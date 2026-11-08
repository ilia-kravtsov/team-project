import type {
  CreateEquipment,
  Equipment
} from "../types/equipment.types.js";

const equipment: Equipment[] = [
  { id: 1, name: "Generator G-001", type: "generator", status: "active" },
  { id: 2, name: "Transformer T-001", type: "transformer", status: "maintenance" },
  { id: 3, name: "Turbine W-001", type: "turbine", status: "inactive" }
];

export function getAllEquipmentFromService(): Equipment[] {
  return equipment;
}

export function getEquipmentByIdFromService(id: number): Equipment | undefined {
  return equipment.find(item => item.id === id);
}

export function createEquipmentFromService(userPayload: CreateEquipment): Equipment {
  const newEquipment = {
    id: equipment.length + 1,
    name: userPayload.name,
    type: userPayload.type,
    status: userPayload.status
  }

  equipment.push(newEquipment);

  return newEquipment
}