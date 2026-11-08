type EquipmentType = "generator" | "transformer" | "turbine";

type EquipmentStatus = "active" | "maintenance" | "inactive";

export interface Equipment {
  id: number;
  name: string;
  type?: EquipmentType;
  status?: EquipmentStatus;
  createdAt?: string;
}