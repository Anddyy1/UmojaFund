// client/src/context/AuthProvider.jsx

import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import API from "../api/axiosInstance";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [loading, setLoading] = useState(true);

  // ==========================
  // CHECK AUTH ON PAGE LOAD
  // ==========================
  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("Checking session...");

        const res = await API.get("/auth/me");
        console.log("ME RESPONSE:", res.data);

        const u = res?.data?.user ?? null;

        if (u) {
          setUser(u);
          localStorage.setItem("user", JSON.stringify(u));
        } else {
          setUser(null);
          localStorage.removeItem("user");
        }

      } catch (error) {
        console.warn("Auth /me failed:", error.message);
        setUser(null);
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);


  // ==========================
  // REGISTER
  // ==========================
  const register = async (formData) => {
    const res = await API.post("/auth/register", formData);

    const u = res?.data?.user ?? null;

    if (u) {
      setUser(u);
      localStorage.setItem("user", JSON.stringify(u));
    }

    return res;
  };


  // ==========================
  // LOGIN
  // ==========================
  const login = async (credentials) => {
    const res = await API.post("/auth/login", credentials);

    const u = res?.data?.user ?? null;

    if (u) {
      setUser(u);
      localStorage.setItem("user", JSON.stringify(u));
    } else {
      // fallback: get current session
      const me = await API.get("/auth/me");
      const fetched = me?.data?.user ?? null;

      if (fetched) {
        setUser(fetched);
        localStorage.setItem("user", JSON.stringify(fetched));
      }
    }

    return res;
  };


  // ==========================
  // LOGOUT
  // ==========================
  const logout = async () => {
    try {
      await API.post("/auth/logout");
    } catch (error) {
      console.warn("Logout failed:", error.message);
    }

    localStorage.removeItem("user");
    setUser(null);
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: Boolean(user),
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
