// src/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // your backend base URL
});

// Request interceptor: runs before every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt"); // read JWT from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
