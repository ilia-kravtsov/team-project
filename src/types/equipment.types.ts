export const EquipmentTypes = ["generator", "transformer", "turbine"] as const;

export type EquipmentType = (typeof EquipmentTypes)[number];

export const EquipmentStatuses = ["active", "maintenance", "inactive"] as const;

export type EquipmentStatus = (typeof EquipmentStatuses)[number];

export interface Equipment {
  id: number;
  name: string;
  type: EquipmentType;
  status: EquipmentStatus;
  createdAt?: string;
}

export type CreateEquipment = Pick<Equipment, "name" | "type" | "status">