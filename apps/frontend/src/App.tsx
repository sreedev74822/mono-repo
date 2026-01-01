import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import LandingPage from './pages/LandingPage/LandingPage';
import  Login  from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp'
import { ProtectedRoute } from "./route/ProtectedRoute";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/find-jobs" element={<div>job seeker dashboard</div>}/>
        <Route path="/job:jobid" element={<div>job details</div>}/>
        <Route path="/saved-jobs" element={<div>saved jobs</div>}/>
        <Route path="/profile" element={<div>user profilrs</div>}/>
        <Route element={<ProtectedRoute requiredRole = "Employer"/>}>
           <Route path="/employer-dashboard" element={<div>Employee dashboard</div>}/>
           <Route path="/post-job" element={<div>job posting form</div>}/>
           <Route path="/manage-job" element={<div>job posting form</div>}/>
           <Route path="/applicants" element={<div>Application viwere</div>}/>
           <Route path="/company-profile" element={<div>Employer prfile page</div>}/>
        </Route>
      </Routes>
    </Router>
  );
}
