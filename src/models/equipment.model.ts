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

// модель описывает работу с таблицей, но не создаёт её при запуске сервера
// за создание таблицы отвечают миграции

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
// declare
// TypeScript в классах воспринимает запись name: string; как объявление поля класса
// При компиляции это превращается в defineProperty в конструкторе/инициализаторе
// То есть при создании инстанса через конструктор эти поля инициализируются значением undefined
// и это перезатирает значения, которые Sequelize уже присвоил из БД
// В итоге model.name === undefined несмотря на то, что данные есть
// С declare name: string; я говорю компилятору:
// «это поле существует, типизируй его, но не генерируй для него никакого JS кода»
// Класс компилируется без этих полей,
// и Sequelize спокойно управляет ими через свои геттеры/сеттеры

// То есть declare нужен, чтобы TS знал типы полей модели,
// но не вмешивался в рантайм и не затирал undefined-ом значения, которыми управляет Sequelize

// init() связывает класс модели с конкретной таблицей и описывает её столбцы
// настраивает модель Sequelize: описывает поля, типы данных и таблицу, с которой она работает
EquipmentModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(100), // Столбец VARCHAR(100) в PostgreSQL
      allowNull: false,            // Запрет значения NULL
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