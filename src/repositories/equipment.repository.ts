import type { Equipment } from "../types/equipment.types.js";

// Временное хранилище данных
const equipment: Equipment[] = [
  {
    id: "11111111-1111-4111-8111-111111111111",
    name: "Generator G-001",
    type: "generator",
    status: "active"
  },
  {
    id: "22222222-2222-4222-8222-222222222222",
    name: "Transformer T-001",
    type: "transformer",
    status: "maintenance"
  }
];

export const findAllEquipment = async (): Promise<Equipment[]> => {
  return equipment;
}

export const findEquipmentById = async (id: string): Promise<Equipment | undefined> => {
  return equipment.find(item => item.id === id);
}