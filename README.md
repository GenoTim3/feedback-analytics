# Feedback Analytics Dashboard

A **SQL-heavy PostgreSQL analytics project** that collects user feedback and exposes raw data and aggregated statistics through an API, rendered in a table-based admin dashboard.

This project is intentionally designed to **avoid ORMs** and keep SQL as a first‑class citizen. All analytics logic (aggregates, filters, pagination) lives in PostgreSQL, not application code.

---

## 🎯 Project Goals

* Practice **real PostgreSQL** (not ORM abstractions)
* Build clean, production-style SQL queries
* Display data using **tables + analytics summaries**
* Learn indexing, aggregation, and query optimization
* Create a portfolio‑ready analytics dashboard

---

## 🧱 Architecture Overview

```
React (Web UI)
   ↓ HTTP (JSON)
Node.js API (Express)
   ↓ SQL
PostgreSQL
```

* **Frontend**: Displays feedback tables and summary stats
* **Backend**: Thin API layer that executes raw SQL
* **Database**: PostgreSQL does the heavy lifting

---

## 📁 Repository Structure

```
feedback-analytics/
│
├── sql/                    # SQL is first-class
│   ├── schema/             # Tables, indexes, views
│   ├── queries/            # Analytics queries
│   └── seed/               # Seed data
│
├── server/                 # Node.js backend (no ORM)
│   └── src/
│       ├── db/             # pg Pool + helpers
│       ├── routes/         # API endpoints
│       └── sql/            # Runtime SQL files
│
├── web/                    # React frontend
│
├── scripts/                # DB helpers (migrate/reset)
├── docker-compose.yml      # PostgreSQL container
├── .gitignore
└── README.md
```

---

## 🗄️ Database Design (Initial)

Main table:

* `feedback`

  * `id`
  * `user_email`
  * `rating` (1–5)
  * `comment`
  * `created_at`

Additional indexes, views, and analytics queries will be added over time.

---

## 🚀 Getting Started

### Prerequisites

* **Docker & Docker Compose**
* **Node.js** (18+ recommended)
* **npm** or **pnpm**

---

### 1️⃣ Clone the Repository

```
git clone <your-repo-url>
cd feedback-analytics
```

---

### 2️⃣ Start PostgreSQL

```
docker-compose up -d
```

This will start a PostgreSQL instance with credentials defined in `docker-compose.yml`.

---

### 3️⃣ Run Database Migrations

```
./scripts/migrate.sh
```

This will:

* Create tables
* Apply indexes
* Create views (if present)

---

### 4️⃣ Seed Sample Data

```
psql <connection_string> -f sql/seed/seed_feedback.sql
```

You should now have realistic feedback data to work with.

---

### 5️⃣ Start the Backend API

```
cd server
npm install
npm run dev
```

API will run on:

```
http://localhost:4000
```

---

### 6️⃣ Start the Frontend

```
cd web
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```

---

## 📊 Features

* Feedback table with pagination & sorting
* Analytics summary:

  * Total feedback count
  * Average rating
  * Positive feedback percentage
* Date range filtering
* SQL-based aggregation (no JS math)

---

## 🧠 Why SQL-Heavy?

This project emphasizes:

* `GROUP BY`, `FILTER`, `CASE WHEN`
* Index design for performance
* Server-side pagination
* Query explain plans
* Clean separation of schema vs queries

If you understand this project, you **understand PostgreSQL**.

---

## 🛣️ Roadmap

* Materialized views for analytics
* JSONB metadata
* Admin filters & saved views
* Query performance benchmarking
* CSV export

---

## 📌 Notes

This project is intentionally verbose and explicit to maximize learning and readability.

No ORMs. No magic. Just SQL.

---

## 📄 License

MIT
