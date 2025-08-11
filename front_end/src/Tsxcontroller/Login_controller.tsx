// src/controllers/Login_controller.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLoginController() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  // ✅ Hardcoded admin credentials
  const defaultAdmin = {
    username: "admin",
    password: "123456",
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === defaultAdmin.username && password === defaultAdmin.password) {
      localStorage.setItem("adminToken", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return {
    username,
    password,
    error,
    setUsername,
    setPassword,
    handleLogin,
  };
}
