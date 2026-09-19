
# 🚀 xSkills - Find Your Next Opportunity

xSkills is a full-stack job portal web application designed to connect job seekers with recruiters in a simple and user-friendly platform.

Job seekers can create their profiles, upload resumes, search and filter jobs, and apply for suitable opportunities. Recruiters can create company profiles, post jobs, view applicants, and manage application statuses.

---

## 🌐 Live Repository

🔗 **GitHub:**  
https://github.com/sovan-payra/xSkills---Find-Your-Next-Opportunity

---

## 📌 About The Project

Finding suitable job opportunities and managing applications can be challenging for both job seekers and recruiters.

xSkills provides a platform where:

- 👨‍💻 Job seekers can discover and apply for jobs.
- 🏢 Recruiters can create companies and publish job openings.
- 📄 Users can upload and manage their resumes.
- 🔎 Jobs can be searched and filtered.
- 📋 Recruiters can view applicants for their posted jobs.
- ✅ Recruiters can accept or reject applications.

The project is built using the MERN stack with a separate React frontend and Node.js/Express backend.

---

# ✨ Features

## 👨‍💻 Job Seeker Features

### 🔐 Authentication

- User registration
- User login
- User logout
- Role-based authentication
- JWT-based authentication
- Protected routes

### 👤 Profile Management

- Create user profile
- Update profile information
- Upload profile photo
- Add skills
- Add bio
- Upload resume
- Update contact information

### 🔍 Job Search

- Browse all available jobs
- Search jobs by keyword
- Search by job title
- Search by location
- Filter jobs by salary
- View detailed job information

### 📄 Job Applications

- Apply for jobs
- Prevent duplicate applications
- View applied jobs
- Track application status
- View application date

### 📊 Application Status

Applications can have the following statuses:

- Pending
- Accepted
- Rejected

---

# 🏢 Recruiter Features

## 🏢 Company Management

Recruiters can:

- Create a company
- Update company information
- Add company description
- Add company website
- Add company location
- Upload company logo

## 💼 Job Management

Recruiters can:

- Create job postings
- Add job title
- Add job description
- Add requirements
- Add salary
- Add experience level
- Add job location
- Add job type
- Add number of positions
- View posted jobs

## 👥 Applicant Management

Recruiters can:

- View applicants for a job
- View applicant name
- View applicant email
- View applicant contact information
- View applicant resume
- View application date
- Accept applications
- Reject applications

---

# 🛠️ Technology Stack

## Frontend

The frontend is built using modern React technologies.

- React.js
- Vite
- React Router
- Redux Toolkit
- Redux Persist
- Axios
- Tailwind CSS
- shadcn/ui
- Lucide React
- Sonner

## Backend

The backend provides REST APIs for authentication, jobs, companies, and applications.

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer

## Cloud Services

- Cloudinary

Cloudinary is used for uploading and storing:

- Profile photos
- Company logos
- Resumes

---

# 🏗️ Project Architecture

```text
                         xSkills
                            │
             ┌──────────────┴──────────────┐
             │                             │
        Frontend                       Backend
             │                             │
         React.js                     Node.js
         Vite                         Express.js
         Redux Toolkit                     │
         Tailwind CSS                       │
             │                              │
             └────────── REST API ──────────┘
                                            │
                                      MongoDB
                                            │
                                      Mongoose
                                            │
                                      Cloudinary



