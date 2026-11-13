import type { Equipment } from "../types/equipment.types.js";
import { EquipmentModel } from "../models/equipment.model.js";
import {ClientEquipment, PatchEquipment} from "../schemas/equipment.schema.js";

// функция mapper для преобразования экземпляра Sequelize из БД
// в JS объект типа Equipment
const toEquipment = (model: EquipmentModel): Equipment => {
    return {
      id: model.id,
      name: model.name,
      type: model.type,
      status: model.status,
      createdAt: model.createdAt.toISOString(),
      updatedAt: model.updatedAt.toISOString(),
    }
}

export const findAllEquipment = async (): Promise<Equipment[]> => {
  const data = await EquipmentModel.findAll();

  return data.map(toEquipment);
};

export const findEquipmentById = async (id: string): Promise<Equipment | undefined> => {
  // EquipmentModel.findByPk() возвращает экземпляр EquipmentModel, если найдёт запись
  // если нет вернёт null
  const equipmentItem = await EquipmentModel.findByPk(id); // Pk - Primary Key - первичный ключ

  if (!equipmentItem) {
    return undefined;
  }

  return toEquipment(equipmentItem);
}

export const createEquipment = async (userPayload: ClientEquipment) => {
  const result = await EquipmentModel.create(userPayload);

  return toEquipment(result);
}

export const updateEquipment = async (id: string, userPayload: PatchEquipment) => {
  const equipmentItem = await EquipmentModel.findByPk(id);

  if (!equipmentItem) {
    return undefined;
  }

  const updatedEquipmentItem = await equipmentItem.update(userPayload)

  return toEquipment(updatedEquipmentItem)
}

export const deleteEquipment = async (id: string): Promise<boolean> => {
  const equipmentItem = await EquipmentModel.findByPk(id);

  if (!equipmentItem) {
    return false;
  }

  await equipmentItem.destroy();

  return true;
}