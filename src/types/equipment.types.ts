export const EquipmentTypes = ["generator", "transformer", "turbine"] as const;

export type EquipmentType = (typeof EquipmentTypes)[number];

export const EquipmentStatuses = ["active", "maintenance", "inactive"] as const;

export type EquipmentStatus = (typeof EquipmentStatuses)[number];

export interface Equipment {
  id: string;
  name: string;
  type: EquipmentType;
  status: EquipmentStatus;
  createdAt?: string;
}

export interface EquipmentParams {
  id: string;
}

export type ClientEquipment = Pick<Equipment, "name" | "type" | "status">

export type PatchEquipment = Partial<ClientEquipment>;