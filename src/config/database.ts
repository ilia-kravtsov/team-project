import { Sequelize } from 'sequelize';

// Здесь настраиваю подключение к PostgreSQL через ORM Sequelize
export const sequelize = new Sequelize(
  '***',
  '***',
  '***',
  {
    host: 'localhost',    // Адрес сервера PostgreSQL
    port: 5432,           // Порт подключения к БД
    dialect: 'postgres',  // Указываю, с какой СУБД работаю
    logging: console.log, // Вывожу SQL запросы Sequelize в консоль
  }
);