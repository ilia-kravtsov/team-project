import { Umzug, SequelizeStorage } from "umzug";
import { sequelize } from "../config/database.js";
import type { QueryInterface } from "sequelize";

export const umzug = new Umzug<QueryInterface>({
  migrations: {
    glob: "src/db/migrations/*.ts",            // Путь к файлам миграций
  },
  context: sequelize.getQueryInterface(),      // Объект, который будет передаваться в миграции
  storage: new SequelizeStorage({ sequelize }),// Хранилище истории выполненных миграций
  logger: console                              // Вывод информации о работе Umzug
})