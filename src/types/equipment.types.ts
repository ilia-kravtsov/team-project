type EquipmentType = "generator" | "transformer" | "turbine";

type EquipmentStatus = "active" | "maintenance" | "inactive";

export interface Equipment {
  id: number;
  name: string;
  type: EquipmentType;
  status: EquipmentStatus;
  createdAt?: string;
}

export type CreateEquipment = Pick<Equipment, "name" | "type" | "status">