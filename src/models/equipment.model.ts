import {
  Model,
  DataTypes
} from "sequelize";

import type {
  EquipmentType,
  EquipmentStatus,
} from "../types/equipment.types.js";

import {
  EquipmentTypes,
  EquipmentStatuses,
} from "../types/equipment.types.js";

import { sequelize } from "../config/database.js";

// Модель в sequelize это - JavaScript/TypeScript-класс,
// который представляет определённую таблицу базы данных
// и позволяет работать с её записями через методы Sequelize
// findAll() findByPk() create() update() destroy()
// вместо написания SQL вручную
export class EquipmentModel extends Model {
  declare id: string;
  declare name: string;
  declare type: EquipmentType;
  declare status: EquipmentStatus;
  declare createdAt: Date;
  declare updatedAt: Date;
}

// init() связывает класс модели с конкретной таблицей и описывает её столбцы
EquipmentModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(100), // Столбец VARCHAR(100) в PostgreSQL
      allowNull: false,            // Запрет NULL
    },
    type: {
      type: DataTypes.ENUM(...EquipmentTypes),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(...EquipmentStatuses),
      allowNull: false,
    },
  },
  {
    sequelize,             // экземпляр подключения к базе из config/database.js
    tableName: "equipment", // Имя таблицы PostgreSQL
    timestamps: true,
  }
);