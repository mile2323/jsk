import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layout/Layout";
import AdminLayout from "./Layout/AdminLayout/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute"; // ✅ NEW

// Public Pages
// import Home from "./View/Home";
import Terms from "./View/PublicView/Terms";
import PrivacyPolicy from "./View/PublicView/Privacy";
// import Login from "./View/Login";
import Login from "./View/PublicView/Login";
import Register from "./View/PublicView/Register";
import ForgotPassword from "./View/PublicView/ForgotPassword";

// Admin Pages
import Dashboard from "./View/Admin/admin_dashboard";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { fetchUser } from "./redux/userSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
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
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* ✅ Admin Routes (Protected) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* ✅ Redirect /admin to /admin/dashboard */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* ✅ Use relative path */}
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
