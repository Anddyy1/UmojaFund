// client/src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import API from "../api/axiosInstance";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await API.get("/auth/me");

        if (res?.data?.user) {
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        } else {
          setUser(null);
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.warn("Auth check failed", error);
        setUser(null);
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const register = async (formData) => {
    const res = await API.post("/auth/register", formData);

    if (res?.data?.user) {
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }

    return res;
  };

  const login = async (credentials) => {
    const res = await API.post("/auth/login", credentials);

    if (res?.data?.user) {
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }

    return res;
  };

  const logout = async () => {
    try {
      await API.post("/auth/logout");
    } catch {
      // Logout request failed — intentionally ignored
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

export default AuthContext;
