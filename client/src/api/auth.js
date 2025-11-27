// client/src/api/auth.js

import api from "./axiosInstance";

// ---------------------------
// AUTH API WRAPPER
// ---------------------------

const AuthAPI = {
  register: (data) => api.post("/auth/register", data),
  login: (data) => api.post("/auth/login", data),
  me: () => api.get("/auth/me"),
  logout: () => api.post("/auth/logout"),
};

export default AuthAPI;
