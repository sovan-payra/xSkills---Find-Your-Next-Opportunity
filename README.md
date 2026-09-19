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


# 📚 API Documentation

# 🔑 User Authentication APIs

## 👤 User Registration

```http
POST /api/user/register

```

Creates a new user account.

The password is securely hashed using `bcrypt` before being stored in MongoDB.

After successful registration, the user can authenticate through the login endpoint.

---

## 🔑 User Login

```http
POST /api/user/login

```

Authenticates a user using:

- 📧 Email
- 🔑 Password
- 👤 Role

After successful authentication, a JWT is generated and stored in an HTTP-only cookie.

---

## 🚪 User Logout

```http
GET /api/user/logout

```

Clears the authentication cookie.

---

## 👤 Update Profile

```http
POST /api/user/profile/update

```

🔐 **Protected**

Users can update:

- 👤 Full name
- 📞 Phone number
- 🧠 Skills
- 📄 Resume
- 📸 Profile photo
- 📝 Bio

The request uses `multipart/form-data` when uploading files.

---

# 🏢 Company APIs

## 📝 Register Company

```http
POST /api/company/register

```

🔐 **Protected**

Recruiters can create a company profile.

Company information includes:

- 🏢 Company name
- 📝 Description
- 🌐 Website
- 📍 Location
- 🖼️ Company logo

---

## 📋 Get Companies

```http
GET /api/company/get

```

Returns companies associated with the authenticated recruiter.

---

## 🔍 Get Company By ID

```http
GET /api/company/get/:id

```

Returns information about a specific company.

---

## ✏️ Update Company

```http
PUT /api/company/update/:id

```

🔐 **Protected**

Recruiters can update:

- 🏢 Company name
- 📝 Description
- 🌐 Website
- 📍 Location
- 🖼️ Company logo

---

# 💼 Job APIs

## 📝 Create Job

```http
POST /api/job/post

```

🔐 **Protected**

Recruiters can create job postings containing:

- 💼 Job title
- 📄 Description
- 🧠 Requirements
- 💰 Salary
- 📊 Experience level
- 📍 Location
- 🏷️ Job type
- 👥 Number of positions
- 🏢 Company

---

## 📋 Get All Jobs

```http
GET /api/job/get

```

Returns available jobs.

The endpoint also supports searching jobs using keywords.

---

## 🔍 Get Job By ID

```http
GET /api/job/get/:id

```

Returns detailed information about a specific job.

---

## 🏢 Get Recruiter Jobs

```http
GET /api/job/getadminjobs

```

🔐 **Protected**

Returns jobs created by the authenticated recruiter.

---

# 📄 Application APIs

## 🚀 Apply For Job

```http
POST /api/application/apply/:id

```

🔐 **Protected**

Allows a job seeker to apply for a specific job.

The system prevents the same user from applying to the same job multiple times.

New applications have the status:

```text
pending

```

---

## 📚 Get Applied Jobs

```http
GET /api/application/get

```

🔐 **Protected**

Returns all jobs applied for by the authenticated user.

---

## 👥 Get Applicants

```http
GET /api/application/:id/applicants

```

🔐 **Protected**

Returns applicants for a specific job.

Applicant information can include:

- 👤 Full name
- 📧 Email
- 📞 Phone number
- 📄 Resume
- 📅 Application date
- 📊 Application status

---

## ✅ Update Application Status

```http
POST /api/application/status/:id/update

```

🔐 **Protected**

Supported application statuses:

```text
pending
accepted
rejected

```

Recruiters can update an application to:

```text
✅ accepted

```

or:

```text
❌ rejected

```

---

# 🔐 Authentication System

xSkills uses **JWT authentication with HTTP-only cookies**.

The authentication flow is:

```text
👤 User
   ↓
🔑 Login
   ↓
🚀 Express API
   ↓
🔍 Verify Credentials
   ↓
🎫 Generate JWT
   ↓
🍪 Store JWT in Cookie
   ↓
🔐 Authenticated Requests

```

---

# 🛡️ Authentication Middleware

Protected API routes use authentication middleware.

The middleware:

1. 🍪 Reads the JWT from the cookie
2. 🔍 Verifies the token
3. 👤 Gets the authenticated user ID
4. ➡️ Allows the request to continue

Invalid or missing tokens return:

```http
401 Unauthorized

```

---

# 🗄️ Database Models

## 👤 User Model

```text
User
├── fullname
├── email
├── phoneNumber
├── password
├── role
│
└── profile
    ├── bio
    ├── skills
    ├── resume
    ├── resumeOriginalName
    ├── company
    └── profilePhoto

```

---

## 🏢 Company Model

```text
Company
├── name
├── description
├── website
├── location
├── logo
└── userId

```

---

## 💼 Job Model

```text
Job
├── title
├── description
├── requirements
├── salary
├── experienceLevel
├── location
├── jobType
├── position
├── company
├── created_by
└── applications

```

---

## 📄 Application Model

```text
Application
├── job
├── applicant
├── status
├── createdAt
└── updatedAt

```

Application status:

```text
pending
accepted
rejected

```

---

# 🔄 Application Flow

## 👤 Job Seeker Flow

```text
📝 Register
     ↓
🔑 Login
     ↓
👤 Create Profile
     ↓
📄 Upload Resume
     ↓
🔍 Browse Jobs
     ↓
🎛️ Search / Filter
     ↓
💼 View Job
     ↓
🚀 Apply
     ↓
📊 Track Application

```

---

## 🏢 Recruiter Flow

```text
📝 Register
     ↓
🔑 Login
     ↓
🏢 Create Company
     ↓
💼 Create Job
     ↓
📢 Publish Job
     ↓
👥 View Applicants
     ↓
┌───────────────┐
│               │
▼               ▼
✅ Accept      ❌ Reject

```

---

# 🔎 Job Search & Filtering

Users can search for jobs using keywords.

The application supports filtering by:

- 📍 Location
- 💼 Job title
- 💰 Salary

Search and filter state is managed using Redux Toolkit.

---

# 📦 Redux State Management

The frontend uses **Redux Toolkit** for global state management.

Main Redux slices:

```text
authSlice
jobSlice
companySlice
applicationSlice

```

## 🔐 authSlice

Manages:

- Current user
- Authentication state
- Loading state

## 💼 jobSlice

Manages:

- All jobs
- Single job
- Admin jobs
- Applied jobs
- Search query
- Job filters

## 🏢 companySlice

Manages:

- Companies
- Single company
- Company search

## 📄 applicationSlice

Manages:

- Applicants

---

# 💾 Redux Persist

**Redux Persist** is used to preserve selected application state between browser refreshes.

The persisted Redux state is stored in browser storage.

---

# ☁️ File Upload Flow

xSkills uses **Multer** and **Cloudinary** for file uploads.

The flow is:

```text
💻 React Frontend
       │
       │ FormData
       ▼
🚀 Express API
       │
       ▼
📤 Multer
       │
       ▼
📁 File Buffer
       │
       ▼
☁️ Cloudinary
       │
       ▼
🔗 File URL
       │
       ▼
🍃 MongoDB

```

Files uploaded by the application include:

- 📸 Profile photos
- 🏢 Company logos
- 📄 Resumes

---

# 🎨 UI & UX

The frontend uses modern UI technologies:

- 🎨 Tailwind CSS
- 🧩 shadcn/ui
- 🎯 Lucide React
- 🔔 Sonner
- 📱 Responsive layouts
- 🔍 Search and filter interfaces
- 📋 Responsive tables
- 🏢 Recruiter dashboards
- 👥 Applicant management

---

# 🧭 Frontend Routes

## 🌐 Public Routes

```text
/
/login
/signup
/jobs
/description/:id
/browse

```

## 👤 User Routes

```text
/profile

```

## 🏢 Recruiter Routes

```text
/admin/companies
/admin/companies/create
/admin/companies/:id
/admin/jobs
/admin/jobs/create
/admin/jobs/:id/applicants

```

---

# 🛡️ Protected Routes

Recruiter pages are protected using a `ProtectedRoute` component.

Recruiters can access:

```text
/admin/companies
/admin/companies/create
/admin/companies/:id
/admin/jobs
/admin/jobs/create
/admin/jobs/:id/applicants

```

Users without recruiter access are redirected away from protected recruiter pages.

---

# 📱 Responsive Design

The application is designed to work across:

- 💻 Desktop
- 💻 Laptop
- 📱 Mobile
- 📱 Tablet

Tailwind CSS responsive utilities are used to adapt layouts to different screen sizes.

---

# 🔒 Security

The application currently implements:

- 🔐 Password hashing using bcrypt
- 🎫 JWT authentication
- 🍪 HTTP-only authentication cookies
- 🛡️ Protected routes
- 👥 Role-based access
- 🌐 CORS configuration
- 🔑 Environment variables for secrets
- 🍃 MongoDB authentication

### 🚧 Recommended Production Improvements

- 🔒 HTTPS
- 🛡️ Rate limiting
- 🔍 Strong request validation
- 🌐 Production CORS configuration
- 🔐 Secure cookie configuration
- 📏 File size validation
- 🚨 Centralized error handling
- 📊 Production monitoring

---

# 🚧 Future Improvements

- 📱 React Native mobile application
- 🔖 Saved jobs
- 📧 Email notifications
- 🔔 Real-time notifications
- 🤖 Advanced job recommendations
- 📊 Recruiter analytics dashboard
- 👨‍💼 Admin dashboard
- 📄 Job pagination
- 🔎 Advanced search
- 📊 Advanced application tracking
- 🧪 Automated testing
- ☁️ Production deployment
- 🌐 Live application hosting

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome! ❤️

### 1️⃣ Fork the repository

### 2️⃣ Create a new branch

```bash
git checkout -b feature/your-feature

```

### 3️⃣ Make your changes

### 4️⃣ Commit your changes

```bash
git commit -m "Add your feature"

```

### 5️⃣ Push your branch

```bash
git push origin feature/your-feature

```

### 6️⃣ Create a Pull Request 🚀

---

# 📸 Screenshots

You can add screenshots of the application here.

Recommended screenshots:

```text
screenshots/
├── home.png
├── login.png
├── signup.png
├── jobs.png
├── job-description.png
├── profile.png
├── companies.png
├── create-job.png
├── admin-jobs.png
└── applicants.png

```

## 🏠 Home Page

[Home Page](https://chatgpt.com/screenshots/home.png)

## 🔐 Login Page

[Login Page](https://chatgpt.com/screenshots/login.png)

## 📝 Signup Page

[Signup Page](https://chatgpt.com/screenshots/signup.png)

## 💼 Jobs Page

[Jobs Page](https://chatgpt.com/screenshots/jobs.png)

## 📄 Job Description

[Job Description](https://chatgpt.com/screenshots/job-description.png)

## 👤 Profile Page

[Profile Page](https://chatgpt.com/screenshots/profile.png)

## 🏢 Recruiter Dashboard

[Recruiter Dashboard](https://chatgpt.com/screenshots/admin-jobs.png)

## 👥 Applicants

[Applicants](https://chatgpt.com/screenshots/applicants.png)

---

# 📚 What I Learned

This project helped me practice and demonstrate:

- 💻 Full-stack web development
- ⚛️ React application development
- 🚀 REST API development
- 📦 Redux Toolkit state management
- 🔐 JWT authentication
- 👥 Role-based authorization
- 🍃 MongoDB database design
- 🧩 Mongoose relationships
- 📤 File uploads
- ☁️ Cloudinary integration
- 🛡️ Protected routes
- 🔄 Frontend and backend integration
- 📱 Responsive UI development
- 🧪 Debugging and API testing

---

# 👨‍💻 Author

## Sovan Payra

🎓 **B.Sc. Computer Science**

💻 **Full-Stack Developer**

🚀 Building modern web and mobile applications

### 🔗 Connect With Me

🐙 **GitHub:**
https://github.com/sovan-payra

💼 **LinkedIn:**
[LinkedIn Profile](https://www.linkedin.com/in/sovan-payra-8a17b9321/)

📸 **Instagram:**
[Instagram Profile](https://www.instagram.com/x.sovannn/)

💼 **xSkills Repository:**
[xSkills - Find Your Next Opportunity](https://github.com/sovan-payra/xSkills---Find-Your-Next-Opportunity)

---

# ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub!

🔗 **xSkills Repository:**
[xSkills - Find Your Next Opportunity](https://github.com/sovan-payra/xSkills---Find-Your-Next-Opportunity)

---

# 📄 License

This project is created for educational and portfolio purposes.

---

# 💼 xSkills

## Find Your Next Opportunity 🚀

Built with ❤️ using the MERN stack.
