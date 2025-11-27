// client/src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";
import API from "../api/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load logged-in user on refresh
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await API.get("/auth/me");
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      }
      setLoading(false);
    };

    checkUser();
  }, []);

  // Register
  const registerUser = async (formData) => {
    const res = await API.post("/auth/register", formData);
    setUser(res.data.user);
    return res.data;
  };

  // Login
  const loginUser = async (formData) => {
    const res = await API.post("/auth/login", formData);
    setUser(res.data.user);
    return res.data;
  };

  // Logout
  const logoutUser = async () => {
    await API.post("/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
