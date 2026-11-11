import type { MigrationFn } from "umzug";
import type { QueryInterface } from "sequelize";
import {
  Sequelize
} from "sequelize";
import { DataTypes } from "sequelize";
import {
  EquipmentStatuses,
  EquipmentTypes
} from "../../types/equipment.types.js";

export const up: MigrationFn<QueryInterface> = async ({ context }) => {
  await context.createTable("equipment", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.literal("gen_random_uuid()"),
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(...EquipmentTypes),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(...EquipmentStatuses),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  })
};

export const down: MigrationFn<QueryInterface> = async ({context}) => {
  await context.dropTable("equipment");
  await context.sequelize.query(
    'DROP TYPE IF EXISTS "enum_equipment_type";'
  );
  await context.sequelize.query(
    'DROP TYPE IF EXISTS "enum_equipment_status";'
  );
}