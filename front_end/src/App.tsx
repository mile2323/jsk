import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

import Layout from "./Layout/Layout";
import AdminLayout from "./Layout/AdminLayout/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute"; // ✅ NEW

// Public Pages
// import Home from "./View/Home";
import Terms from "./View/PublicView/Terms";
import PrivacyPolicy from "./View/PublicView/Privacy";
// import Login from "./View/Login";
import Login from "./components/adminLogin";
import Register from "./View/PublicView/Register";
import ForgotPassword from "./View/PublicView/ForgotPassword";
// import Home from "./View/PublicView/Home";

// Admin Pages
// import Dashboard from "./View/Admin/admin_dashboard";
// import { useAppDispatch } from "./redux/hooks";
// import { useEffect } from "react";
// import { fetchUser } from "./redux/userSlice";
// import TrainingDevelopment from "./components/TrainingDevelopment";
// import PlacementRegistrationForm from "./components/Placment";
import LandingPage from "./components/PlamentLandingpage";
import AdminDashboard from "./components/AdminDashboard";
import FranchiseService from "./components/Franchisetable";
// import Franchise from "./components/Franchise";

function App() {
  
  return (
    <Router>
      <Routes>
        {/* ✅ Public Routes */}
        <Route element={

            //  <Layout />
          <PublicRoute>
            <Layout />
          </PublicRoute>
        }>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* ✅ Admin Routes (Protected) */}

        <Route path="/admin/login" element={<Login />} />   {/* relative path */}
      <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  }
> 
<Route path="dashboard" element={<AdminDashboard/>} />
<Route path="franch" element={<FranchiseService/>} />
  
</Route>

      </Routes>
    </Router>

  );
}

export default App;
