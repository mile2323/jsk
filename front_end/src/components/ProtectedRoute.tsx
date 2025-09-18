import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import axios from "@/utils/axiosInstance";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

interface UserData {
  id: string;
  isSuperAdmin: boolean;
  [key: string]: unknown; // Allow additional properties
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const userid = useSelector((state: RootState) => (state.user.data != null ? state.user.data.id : null));
  const [userObj, setUserObj] = useState<UserData | null>(null);

   useEffect(() => {
    const checkAuth = async () => {
      try {
        const res= await axios.get( `${import.meta.env.VITE_API_URL}/choiceCenter/get-user/`); // or your user auth-check endpoint
        if (res.data && res.data.isLogedIn) {
          console.log("User is logged in:", res.data);
          setIsLoggedIn(res.data.isLogedIn);
        }
      } catch  {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);
  useEffect(() => {
  console.log("isLoggedIn changed:", isLoggedIn);
}, [isLoggedIn]);

  useEffect(() => {
    if (userid && isLoggedIn) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/centers/${userid}/`); // Adjusted endpoint
          setUserObj(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchData();
    }
  }, [userid, isLoggedIn]);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        if (userObj && typeof userObj === "object" && "isSuperAdmin" in userObj) {
          setIsAdmin(userObj.isSuperAdmin);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, [userObj]);

  console.log("User admin:", isLoggedIn);
  console.log("User :", userObj);

  return isLoggedIn ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;