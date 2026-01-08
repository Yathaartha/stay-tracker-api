# 🚀 Node.js TypeScript Backend Boilerplate

A scalable, production-ready backend API built with **Node.js**, **TypeScript**, **Express**, and **Sequelize (PostgreSQL)**. This project uses **Docker** for local development and **Umzug** for code-first migrations.

## 🛠 Tech Stack

- **Runtime:** Node.js (v20+)
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Migrations:** Umzug (Type-safe migrations)
- **Validation:** Zod
- **Auth:** JSON Web Tokens (JWT) & Bcrypt
- **Tools:** Docker, Adminer (DB GUI)

---

## 🏗 Project Architecture

- `src/db/models`: Database schema definitions.
- `src/db/repositories`: Data access layer (BaseRepository pattern).
- `src/services`: Business logic and third-party integrations.
- `src/controllers`: Request handling and response formatting.
- `src/middlewares`: Auth, Validation, and File Upload logic.
- `src/validations`: Zod schemas for request validation.

---

## 🚀 Quick Start (Docker)

### 1. Environment Setup

Create a `.env` file in the root directory:

```text
PORT=3000
NODE_ENV=development

# Database (Use 'db' for host inside Docker, 'localhost' for local)
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=stay_tracker
DB_HOST=db
DB_PORT=5432

# Authentication
JWT_SECRET=super_secret_key_change_me

```

### 2. Launch with Docker

Run the entire stack (API, Postgres, Adminer):

```bash
docker compose up -d --build

```

- **API:** `http://localhost:3000`
- **Adminer (DB GUI):** `http://localhost:8080` (Server: `db`, System: `PostgreSQL`)

### 3. Running Migrations

Migrations run automatically on server start. To manually run or check status:

```bash
# Run migrations inside container
docker exec -it node_api npm run db:migrate

# Rollback last migration
docker exec -it node_api npx ts-node src/db/migrator.ts down

```

---

## 🛠 Development Commands

| Command                      | Description                                   |
| ---------------------------- | --------------------------------------------- |
| `npm run dev`                | Starts the app with Nodemon and ts-node (HMR) |
| `npm run build`              | Compiles TypeScript to `dist/`                |
| `npm run start`              | Runs the compiled code from `dist/`           |
| `docker compose logs -f api` | View live logs from the API container         |

---

## 📁 Key Features Included

- **Auto-restarting:** Nodemon watches `src/` and restarts the container instantly on save.
- **Image Uploads:** Pre-configured with **Multer**. Files are saved to `/uploads`.
- **Type-Safe Validation:** Middleware validates `req.body` using Zod schemas before hitting controllers.
- **Unified Error Handling:** Centralized middleware for catching and formatting API errors.

---

## 🛑 Common Troubleshooting

- **SASL Auth Error:** Ensure `DB_PASSWORD` in `.env` matches the Postgres container environment.
- **Connection Refused:** If running the app locally (outside Docker), change `DB_HOST` to `localhost`.
- **Module Not Found:** Ensure all imports in `.ts` files end with `.js` (e.g., `import x from './file.js'`).

