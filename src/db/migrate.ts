import { umzug } from "./umzug.js";
import { sequelize } from "../config/database.js";

/*
При запуске npx tsx src/db/migrate.ts
Umzug проверяет историю миграций, определяет ещё не выполненные и применяет их.
История хранится в таблице SequelizeMeta
*/
const run = async () => {
    try {
        // pending() вернёт список еще не применённых миграций
        const migrations = await umzug.pending();
        console.log("Pending migrations:", migrations);

        await umzug.up();

        console.log('Migrations completed')
    } catch (error) {
        console.error(error);

        process.exitCode = 1;
    } finally {
        await sequelize.close();
    }

};

run();