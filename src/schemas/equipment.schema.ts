import { z } from "zod";
import {
  EquipmentStatuses,
  EquipmentTypes
} from "../types/equipment.types.js";

export const createEquipmentSchema = z.strictObject({
  name: z.string().trim().min(1),
  type: z.enum(EquipmentTypes),
  status: z.enum(EquipmentStatuses)
});

export const updateEquipmentSchema = createEquipmentSchema
  .partial()
  .refine(
    data => Object.keys(data).length > 0,
    { message : "EMPTY_UPDATE" }
  );

export type ClientEquipment = z.infer<typeof createEquipmentSchema>;

export type PatchEquipment = z.infer<typeof updateEquipmentSchema>;