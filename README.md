# Team-project

## Запуск

**Требования:** Node.js, npm, Git, Docker Desktop

### 1. Клонировать репозиторий

```bash
git clone <URL_РЕПОЗИТОРИЯ>
cd <ПАПКА_ПРОЕКТА>
git switch dev
```

Если работа продолжается в feature-ветке:

```bash
git switch feat/some-functionality
```

### 2. Установить зависимости

```bash
npm ci
```

### 3. Запустить PostgreSQL в Docker

Убедиться, что Docker Desktop запущен.

```bash
docker compose up -d
docker compose ps
```

База данных доступна на `localhost:5432`.

Параметры подключения из `docker-compose.yml`:

```text
Database: equipment_db
User: equipment_user
Password: equipment_password
Port: 5432
```

### 4. Проверить подключение к базе

```bash
npx tsx src/config/check-database.ts
```

Ожидаемый результат:

```text
PostgreSQL connected
```

### 5. Запустить сервер

```bash
npm run dev
```

### Полезные команды

```bash
docker compose ps                  # состояние контейнеров
docker compose logs -f postgres    # логи PostgreSQL
docker compose stop                # остановить контейнеры
docker compose up -d               # запустить повторно
npm run typecheck                  # проверить типы TypeScript
git status                         # проверить состояние Git
```

**Важно:** `docker compose down -v` удаляет тома с данными PostgreSQL