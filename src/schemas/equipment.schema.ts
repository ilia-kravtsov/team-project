import { z } from "zod";
import {
  EquipmentStatuses,
  EquipmentTypes
} from "../types/equipment.types.js";

export const createEquipmentSchema = z.strictObject({
  // strictObject - дополнительные неизвестные поля запрещены
  name: z.string().trim().min(1),   // непустая строка после удаления пробелов по краям
  type: z.enum(EquipmentTypes),     // одно из допустимых значений EquipmentTypes
  status: z.enum(EquipmentStatuses) // одно из допустимых значений EquipmentStatuses
});

export const updateEquipmentSchema = createEquipmentSchema
  .partial()
  .refine(
    data => Object.keys(data).length > 0,
    { message : "EMPTY_UPDATE" }
  );

export type ClientEquipment = z.infer<typeof createEquipmentSchema>;

export type PatchEquipment = z.infer<typeof updateEquipmentSchema>;