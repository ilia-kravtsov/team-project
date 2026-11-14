import 'dotenv/config'; // загружает переменные из .env

// Получаем переменную окружения и проверяем её наличие
function getEnv(name: string): string {
  const value = process.env[name];

  if (value === undefined || value === '') {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export const env = {
  PORT: Number(getEnv('PORT')),
  DB_HOST: getEnv('DB_HOST'),
  DB_PORT: Number(getEnv('DB_PORT')),
  DB_NAME: getEnv('DB_NAME'),
  DB_USER: getEnv('DB_USER'),
  DB_PASSWORD: getEnv('DB_PASSWORD'),
};