# Remix-Express SWAPI Application
This project is a full-stack web application that allows users to view and search for Star Wars characters using the [SWAPI API](https://swapi.dev/documentation). It includes both a **backend** built with Node.js/Express and a **frontend** built with React using Remix.

## Features:
- View a paginated list of Star Wars characters.
- Search for characters by name.
- Backend built with Express and TypeScript.
- Frontend built with Remix, React, and TypeScript.
- Zod for schema validation on the backend.
- Tailwind CSS for frontend styling.

## Project Structure
```bash
remix-express-swapi/
├── backend/              # Backend (Express) API
├── client/               # Frontend (Remix) application
├── .nvmrc                # Specif node version v18.17.1
└── README.md             # Project documentation
```

## Prerequisites
Make sure you have the following installed:

- Node.js >= v18.17.1
- npm
- Git

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/alamariful1727/remix-express-swapi.git
cd remix-express-swapi
```

### 2. Select specific node.js version
```bash
nvm use
```

### 3. Install Dependencies
You need to install dependencies separately for both the backend and the frontend.

#### Backend Setup
Navigate to the backend folder and install the dependencies:
```bash
cd backend
npm install
```
Copy `.env.example` and create a new file named `.env`
```bash
cp .env.example .env
```
#### Frontend Setup
Navigate to the backend folder and install the dependencies:
```bash
cd ../client
npm install
```
Copy `.env.example` and create a new file named `.env`
```bash
cp .env.example .env
```

### 4. Running the Application
You need to run both the backend and frontend servers.

#### Running the Backend
```bash
cd backend
npm run dev
```
The backend will start on http://localhost:4000.

#### Running the Frontend
```bash
cd ../client
npm run dev
```
The frontend will start on http://localhost:5173.


### 5. Building for Production

#### Backend
To build the backend for production, run the following command:
```bash
cd backend
npm run build
```
You can start the production server using:
```bash
npm run prod
```

#### Frontend
To build the frontend for production, run the following command:
```bash
cd client
npm run build
```
Then serve the application using:
```bash
npm start
```
## Contact

**Ariful Alam**

[![Gmail Badge](https://img.shields.io/badge/-alamariful1727-A9A9A9?style=flat-square&logo=Gmail&logoColor=red&link=mailto:vsasvipul@gmail.com)](mailto:alamariful1727@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-alamariful1727-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alamariful1727/)](https://www.linkedin.com/in/alamariful1727/)
[![Facebook Badge](https://img.shields.io/badge/-alamariful1727-3b5998?style=flat-square&logo=Facebook&logoColor=white&link=https://www.facebook.com/alamariful1727)](https://www.facebook.com/alamariful1727)