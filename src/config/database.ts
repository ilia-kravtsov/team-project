import { Sequelize } from 'sequelize';
import { env } from './env.js';

// Здесь настраиваю подключение к PostgreSQL через ORM Sequelize
export const sequelize = new Sequelize(
  env.DB_NAME,
  env.DB_USER,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,    // Адрес сервера PostgreSQL
    port: env.DB_PORT,    // Порт подключения к БД
    dialect: 'postgres',  // Указываю, с какой СУБД работаю
    logging: console.log, // Вывожу SQL запросы Sequelize в консоль
  }
);