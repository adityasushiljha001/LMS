# 🎓 LMS - Learning Management System

A full-stack **Learning Management System (LMS)** built with the MERN stack. Students can explore and enroll in courses, while educators can create and manage courses.

## 🚀 Features

### 👨‍🎓 Student

* User authentication with Clerk
* Browse and view courses
* Enroll in courses
* View enrolled courses
* Track learning progress

### 👨‍🏫 Educator

* Educator authentication and authorization
* Become an educator
* Create and manage courses
* Upload course thumbnails
* Add chapters and lectures
* Set course price and discount

### 🔐 Authentication

* Clerk authentication
* Protected API routes
* Student and educator roles
* Clerk webhooks

### ☁️ Services

* **MongoDB Atlas** — Database
* **Cloudinary** — Image and media storage
* **Clerk** — Authentication
* **Vercel** — Frontend deployment
* **Render** — Backend deployment

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Clerk React
* Axios
* React Router
* Quill Editor

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Clerk Express
* Cloudinary
* Multer
* Svix

---

## 📁 Project Structure

```text
LMS/
│
├── client/              # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
├── server/              # Node.js backend
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd LMS
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

### Backend

```bash
cd server
npm install
npm run server
```

Backend:

```text
http://localhost:5000
```

---

## 🔑 Environment Variables

### Client `.env`

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000
```

### Server `.env`

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
CURRENCY=USD
```

> ⚠️ Never commit `.env` files or secret keys to GitHub.

---

## 🔄 API Routes

```text
GET  /
POST /clerk
GET  /api/educator/update-role
POST /api/educator/add-course
```

---

## 🚀 Deployment

| Service        | Platform      |
| -------------- | ------------- |
| Frontend       | Vercel        |
| Backend        | Render        |
| Database       | MongoDB Atlas |
| Media Storage  | Cloudinary    |
| Authentication | Clerk         |

---

## 📌 Future Improvements

* Online payments
* Course reviews and ratings
* Certificate generation
* Course search and filtering
* Admin dashboard
* Notifications
* Wishlist
