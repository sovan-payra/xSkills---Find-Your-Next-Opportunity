# 💼 xSkills - Find Your Next Opportunity

A full-stack job portal platform built with **React, Vite, Node.js, Express.js, MongoDB, Mongoose, Redux Toolkit, JWT, Cloudinary, and Tailwind CSS**.

xSkills allows job seekers to create professional profiles, upload resumes, discover and filter job opportunities, and apply for jobs. Recruiters can create companies, publish job openings, view applicants, and manage application statuses. 🚀

🔗 **GitHub Repository:** https://github.com/sovan-payra/xSkills---Find-Your-Next-Opportunity

---

## ✨ Features

### 👤 Job Seeker Features

* 📝 User registration
* 🔑 User login
* 🚪 User logout
* 🔐 JWT-based authentication
* 🍪 Cookie-based authentication
* 🔒 Password hashing using bcrypt
* 👤 Create and update profile
* 📸 Upload profile photo
* 🧠 Add and manage skills
* 📄 Upload resume
* 🔍 Browse available jobs
* 🔎 Search jobs by keyword
* 📍 Filter jobs by location
* 💼 Filter jobs by job title
* 💰 Filter jobs by salary
* 📋 View detailed job information
* 🚀 Apply for jobs
* 🚫 Prevent duplicate applications
* 📚 View applied jobs
* 📊 Track application status
* 📅 View application date

### 🏢 Recruiter Features

* 📝 Recruiter registration
* 🔑 Recruiter login
* 🚪 Recruiter logout
* 🔐 JWT-based authentication
* 🍪 Cookie-based authentication
* 🏢 Create company profile
* ✏️ Update company information
* 🖼️ Upload company logo
* 🌐 Add company website
* 📍 Add company location
* 📝 Create job postings
* 📄 Add job description
* 🧠 Add job requirements
* 💰 Add salary information
* 📊 Add experience level
* 💼 Add job type
* 👥 Add number of positions
* 📋 View posted jobs
* 👀 View job applicants
* 📄 View applicant resume
* ✅ Accept applications
* ❌ Reject applications
* 📊 Manage application status

### 🎨 UI Features

* 📱 Responsive design
* 🎨 Modern user interface
* 🧭 React Router navigation
* 🔍 Job search interface
* 🎛️ Job filtering
* 📋 Responsive job cards
* 🏢 Company management interface
* 👥 Applicant management interface
* 🌙 Clean and modern layout
* 🔔 Toast notifications
* 📱 Mobile-friendly interface
* ♿ Accessible UI components

---

## 🧰 Tech Stack

### 🎨 Frontend

* ⚛️ **React.js**
* ⚡ **Vite**
* 🧭 **React Router**
* 📦 **Redux Toolkit**
* 💾 **Redux Persist**
* 📡 **Axios**
* 🎨 **Tailwind CSS**
* 🧩 **shadcn/ui**
* 🎯 **Lucide React**
* 🔔 **Sonner**

### ⚙️ Backend

* 🟢 **Node.js**
* 🚂 **Express.js**
* 🍃 **MongoDB**
* 🧩 **Mongoose**
* 🔑 **JSON Web Token**
* 🔒 **bcrypt**
* 🍪 **cookie-parser**
* 🌐 **CORS**
* 📤 **Multer**

### ☁️ Cloud Services

* ☁️ **Cloudinary**

Cloudinary is used for storing:

* 📸 Profile photos
* 🏢 Company logos
* 📄 Resumes

---

## 📁 Project Structure

```text
xSkills---Find-Your-Next-Opportunity/
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 admin/
│   │   │   ├── 📁 auth/
│   │   │   ├── 📁 shared/
│   │   │   └── 📁 ui/
│   │   │
│   │   ├── 📁 hooks/
│   │   │
│   │   ├── 📁 redux/
│   │   │   ├── authSlice.js
│   │   │   ├── jobSlice.js
│   │   │   ├── companySlice.js
│   │   │   ├── applicationSlice.js
│   │   │   └── store.js
│   │   │
│   │   ├── 📁 utils/
│   │   │   └── constant.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── 📁 public/
│   ├── package.json
│   └── vite.config.js
│
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 controllers/
│   │   │   ├── user.controller.js
│   │   │   ├── company.controller.js
│   │   │   ├── job.controller.js
│   │   │   └── application.controller.js
│   │   │
│   │   ├── 📁 db/
│   │   │   └── db.js
│   │   │
│   │   ├── 📁 middlewares/
│   │   │   ├── isAuthenticated.js
│   │   │   └── mutler.js
│   │   │
│   │   ├── 📁 models/
│   │   │   ├── user.model.js
│   │   │   ├── company.model.js
│   │   │   ├── job.model.js
│   │   │   └── application.model.js
│   │   │
│   │   ├── 📁 routes/
│   │   │   ├── user.route.js
│   │   │   ├── company.route.js
│   │   │   ├── job.route.js
│   │   │   └── application.route.js
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── cloudinary.js
│   │   │   └── datauri.js
│   │   │
│   │   └── app.js
│   │
│   ├── server.js
│   └── package.json
│
├── 📄 .gitignore
└── 📄 README.md



```
# Installation

Clone the repository:

```bash
git clone https://github.com/sovan-payra/xSkills---Find-Your-Next-Opportunity.git
```

Navigate into the project directory:

```bash
cd xSkills---Find-Your-Next-Opportunity
```

---

## 🎨 Frontend Setup

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

---

## ⚙️ Backend Setup

Open another terminal and navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
node server.js
```

The backend will run at:

```text
http://localhost:3000
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` directory:

```env
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
PORT=3000
```

### ⚠️ Important

Never commit your `.env` file to GitHub.

Make sure your `.gitignore` contains:

```text
node_modules/
.env
```

---
