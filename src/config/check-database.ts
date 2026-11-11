import { sequelize } from "./database.js";

// Задача - проверить подключение к PostgreSQL
export const checkDatabaseConnection = async () => {
  try {
    await sequelize.authenticate()

    console.log('PostgreSQL connected')
  } catch (e) {
    console.error(e)
  }
}

checkDatabaseConnection();