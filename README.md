# Stay Tracker — Backend API

A full-stack backend API for a **Nepal-focused accommodation booking platform**, supporting homestays and hotels with **role-based access**, **availability-aware bookings**, and **AI-powered travel assistance**.

This project is built as a **personal portfolio project** to demonstrate backend engineering, API design, database modeling, and practical AI integration.

---

## ✨ Features

### Core Platform

- User authentication (JWT-based)
- Role-based access control (Guest, Host, Admin)
- Accommodation listings (homestays & hotels)
- Availability calendar & booking management
- Reviews & ratings
- Search and filtering
- Nepal-specific regions and pricing (NPR)

### Host Tools

- Create and manage listings
- Set pricing and availability
- View and manage bookings
- AI-generated listing descriptions (English ↔ Nepali)

### AI Integrations

- AI-powered **Nepal Travel Assistant**
- Context-aware recommendations using platform data
- Review summarization
- Prompt-engineered responses with guardrails

### Admin Tools

- Listing approval & moderation
- Review moderation
- Basic user management

---

## 🏗️ Tech Stack

**Backend**

- Node.js
- Express (or NestJS)
- PostgreSQL
- JWT Authentication

**AI**

- OpenAI API (prompt engineering + RAG)
- Structured outputs
- Guardrails for budget, dates, and scope

**Infrastructure**

- Docker
- Environment-based configuration

---

## 🧠 Architecture Overview

```
Client (Web)
   |
   | REST API
   v
Backend API (Node.js)
   |
   | ORM / Queries
   v
PostgreSQL Database
   |
   | Context Retrieval
   v
AI Service (OpenAI API)
```

### Key Design Decisions

- Clear separation of concerns (auth, listings, bookings, AI)
- AI responses are **grounded in platform data**
- No real payments (mock booking flow for safety and simplicity)

---

## 🗂️ Data Models (High-Level)

- **User**

  - id, name, email, role

- **Listing**

  - id, title, description, type, location, price

- **Availability**

  - listing_id, date, is_available

- **Booking**

  - user_id, listing_id, dates, status

- **Review**

  - booking_id, rating, comment

---

## 🤖 AI Features Explained

### 1. AI Travel Assistant

A chat-based assistant designed to act as a **Nepal travel expert**.

**Capabilities**

- Suggest accommodations based on:

  - Budget
  - Travel dates
  - Preferences

- Ask follow-up questions if information is missing
- Only recommends listings available on the platform

**Prompt Engineering**

- System prompt defines role and boundaries
- Context injection from database (RAG)
- Guardrails to prevent hallucinations

---

### 2. AI Listing Description Generator

Helps hosts create polished listings.

**Input**

- Bullet points (location, amenities, rules)

**Output**

- Clean English description
- Optional Nepali translation
- Tone control (budget / standard / premium)

---

### 3. Review Summarization

Summarizes multiple guest reviews into concise insights.

---

## 🔐 Authentication & Authorization

- JWT-based authentication
- Role-based authorization middleware
- Protected routes for hosts and admins
- Input validation and error handling

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL
- Docker (optional)

### Installation

```bash
git clone https://github.com/your-username/nepal-accommodation-api.git
cd nepal-accommodation-api
npm install
```

### Environment Variables

Create a `.env` file:

```env
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/nepal_stays
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_key
```

### Run the Server

```bash
npm run dev
```

API will be available at:

```
http://localhost:3000
```

---

## 🧪 Testing & Demo Data

- Seed scripts included for demo listings and users
- Mock bookings (no real payments)
- Suitable for local testing and portfolio demos

---

## 🧭 Project Scope & Limitations

**Included**

- Core booking flow
- AI-powered assistance
- Nepal-focused domain logic

**Excluded**

- Real payments
- Mobile applications
- Flight booking
- Legal/tax compliance

These exclusions are intentional to keep the project focused and maintainable.

---

## 📌 Why This Project?

This project was built to demonstrate:

- Backend system design
- RESTful API development
- Database modeling
- Practical AI integration (not gimmicks)
- Real-world problem solving in a regional context

---

## 📄 License

This project is for **educational and portfolio purposes only**.

---

## 👤 Author

**Yathaartha Maharjan**
MS in Computer Science
Full-stack Developer

