# Expense Tracking App Back-End

This is the back-end for an expense tracking application built with Node.js, Express.js, MongoDB, and Passport.js for authentication.

## Features

- User registration and login (local strategy, email as username)
- Session-based authentication
- CRUD operations for expenses (create, read, update, delete)
- MongoDB for data storage (Mongoose ODM)
- Secure password hashing with bcrypt

## Tech Stack

- **Node.js** — JavaScript runtime environment
- **Express.js** — Web application framework for Node.js
- **MongoDB** — NoSQL database for storing user and expense data
- **Mongoose** — ODM (Object Data Modeling) library for MongoDB and Node.js
- **Passport.js** — Authentication middleware for Node.js
- **bcrypt** — Library for hashing passwords
- **dotenv** — Loads environment variables from `.env` file
- **nodemon** — Utility for automatically restarting the server during development

## Front-End

Front-End built with Angular:
https://github.com/LeoSmotryk/expense-tracking-app_front-end

## Project Structure

```
backend/
  .env
  .gitignore
  package.json
  server.js
  config/
    passport.js
  models/
    Expense.js
    User.js
  routes/
    auth.js
    expenses.js
```

## Setup

1. **Clone the repository** and navigate to the `backend` directory.

2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create a `.env` file** in the `backend` directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   PORT=5000
   ```

4. **Start the server:**
   ```sh
   npm run dev
   ```
   or
   ```sh
   npm start
   ```

## API Endpoints

### Auth

- `POST /auth/signup` — Register a new user
- `POST /auth/login` — Login user
- `GET /auth/profile` — Get current user profile (requires authentication)
- `POST /auth/logout` — Logout user

### Expenses (requires authentication)

- `GET /expenses` — Get all expenses for the logged-in user
- `POST /expenses` — Create a new expense
- `PUT /expenses/:id` — Update an expense
- `DELETE /expenses/:id` — Delete an expense
