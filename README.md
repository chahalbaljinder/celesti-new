# Agency Website Clone

This project is a full-stack clone of the agency-aceternity website, featuring a Next.js/TailwindCSS frontend and a Node.js/Express/MongoDB backend.

## Project Structure

```
celesti/
├── client/             # Next.js frontend
├── server/             # Node.js backend
├── docs/               # Documentation
│   ├── prd.md          # Product Requirements Document  
│   └── best-practices.md   # Best Practices
└── README.md           # This file
```

## Features

- Pixel-perfect clone of the original website UI
- Responsive design for all device sizes
- Animations and transitions matching the original site
- Backend API for contact form submissions
- MongoDB integration for data persistence
- Secure API with validation and error handling

## Tech Stack

### Frontend
- Next.js (React framework with SSR)
- TailwindCSS (styling)
- Framer Motion (animations)

### Backend
- Node.js
- Express
- MongoDB
- Mongoose (ODM)

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Frontend Setup

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a .env.local file:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```
   npm run dev
   ```

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a .env file:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/agency-clone
   NODE_ENV=development
   ```

4. Start the server:
   ```
   npm run dev
   ```

## Development

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:5000

## Deployment

### Frontend
Build the production version:
```
cd client
npm run build
```

### Backend
For production:
```
cd server
npm start
```

## License
MIT
