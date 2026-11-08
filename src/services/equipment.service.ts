import type { Equipment } from "../types/equipment.types.js";

const equipment: Equipment[] = [
  { id: 1, name: "Generator G-001" },
  { id: 2, name: "Transformer T-001" },
  { id: 3, name: "Turbine W-001" }
];

export function getAllEquipmentFromService(): Equipment[] {
  return equipment;
}

export function getEquipmentByIdFromService(id: number): Equipment | undefined {
  return equipment.find(item => item.id === id);
}