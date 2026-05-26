# Day 64: Express Routes and CRUD Architecture

A lightweight, modular Node.js backend application built with **Express.js (v5.x)**. This project demonstrates how to structure clean, scalable REST API routes using Express Router and MVC controller patterns for basic CRUD (Create, Read, Update, Delete) operations.

## 🚀 Features
* **Modular Routing**: Uses `express.Router()` to separate endpoints into clean, dedicated route files.
* **Controller Pattern**: Decouples business logic from endpoints into a `products.controller.js` file.
* **Development Workflow**: Integrated with `nodemon` for automatic server reboots upon file changes.
* **Express 5 ready**: Uses the latest Express dependency standards.

---

## 🛠️ Tech Stack & Dependencies
* **Runtime Environment:** Node.js
* **Framework:** Express.js (`^5.2.1`)
* **Dev Tooling:** Nodemon (`^3.1.14`)

---

## 📂 Project Structure
```text
├── controller/
│   └── products.controller.js   # Contains CRUD business logic
├── routes/
│   └── products.routes.js       # Defines application endpoints
├── .gitignore                   # Ignores node_modules
├── main.js                      # Application entry point & server config
├── package.json                 # Project configuration & scripts
└── README.md                    # Project documentation
```

---

## 🔨 Step-by-Step Setup Guide

Follow these steps to set up and run this project from scratch:

### 1. Initialize Project & Dependencies
Create a new directory, navigate into it, and initialize your `package.json`:
```bash
npm init -y
```

Install Express framework and development dependencies:
```bash
npm i express
npm i -D nodemon
```

### 2. Configure Configuration Files
Update your `package.json` file to target `main.js` and insert the development script:
```json
"main": "main.js",
"scripts": {
  "dev": "nodemon main.js"
}
```

Create a `.gitignore` file to avoid pushing heavy environment files to Git:
```text
node_modules/
```

### 3. Start the Server
Run the local environment using the development script:
```bash
npm run dev
```

The terminal should output:
`Server running on http://localhost:8080`

---

## 🔌 API Endpoints Reference


| Method | Endpoint | Description | Sample Response Status |
| :--- | :--- | :--- | :--- |
| **GET** | `/all-products` | Fetches all inventory products | `200 OK` |
| **POST** | `/create` | Adds a new product record | `200 OK` |
| **PUT** | `/edit` | Updates existing product details | `200 OK` |
| **DELETE** | `/delete` | Removes a product record | `200 OK` |

---

## 🧪 Testing the API
You can test these endpoints using API clients like **Postman**, **Thunder Client**, or **cURL**.

**Example request (GET):**
```bash
curl http://localhost:8080/all-products
```
**Response:**
```json
{ "message": "All Products fetched successfully" }
```
