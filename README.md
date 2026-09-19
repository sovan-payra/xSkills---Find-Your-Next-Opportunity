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
