import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Jobs from "./components/Jobs";
import JobDescription from "./components/JobDescription";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from "./components/admin/PostJob";
import Applicants from "./components/admin/Applicants";


function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/description/:id" element={<JobDescription />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile" element={<Profile />} />

      {/* Admin routes */}
      <Route
        path="/admin/companies"
        element={
          <ProtectedRoute>
            <Companies />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/companies/create"
        element={
          <ProtectedRoute>
            <CompanyCreate />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/companies/:id"
        element={
          <ProtectedRoute>
            <CompanySetup />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/jobs"
        element={
          <ProtectedRoute>
            <AdminJobs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/jobs/create"
        element={
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/jobs/:id/applicants"
        element={
          <ProtectedRoute>
            <Applicants />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;