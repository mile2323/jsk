// src/View/Login.tsx
import React from "react";
import useLoginController from "../Tsxcontroller/Login_controller"; // ✅ adjust path as needed

const Login: React.FC = () => {
  const {
    username,
    password,
    error,
    setUsername,
    setPassword,
    handleLogin,
  } = useLoginController();

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form
        onSubmit={handleLogin}
        style={{
          width: "300px",
          padding: "20px",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Admin Login</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
