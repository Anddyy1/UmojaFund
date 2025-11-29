require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const connectDB = require("./config/db");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");

const app = express();

// ============================
// 🚀 CONNECT DATABASE
// ============================
connectDB();

// ============================
// 🚀 ALLOWED ORIGINS
// ============================
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "https://umojafund.vercel.app"
];

// ============================
// 🚀 FIXED CORS — CORRECT CALLBACK
// ============================
app.use(cors({
  credentials: true,
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

// ============================
// 🚀 MIDDLEWARES
// ============================
app.use(cookieParser());

// Prevent helmet from blocking frontend requests
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use(morgan("dev"));
app.use(compression());

// Increase JSON limit slightly (safe)
app.use(express.json({ limit: "2mb" }));

// ============================
// 🚀 RATE LIMIT (SAFE)
// ============================
const authLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30,
  message: { success: false, message: "Too many requests, slow down." }
});

app.use("/api/auth", authLimiter);

// ============================
// 🚀 ROUTES
// ============================
app.use("/api/auth", require("./routes/auth"));
app.use("/api/campaigns", require("./routes/campaignRoutes"));

// ============================
// 🚀 ROOT TEST ROUTE
// ============================
app.get("/", (req, res) => {
  res.send("UmojaFund backend is running!");
});

// ============================
// 🚀 404 HANDLER
// ============================
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ============================
// 🚀 GLOBAL ERROR HANDLER
// ============================
app.use((err, req, res, next) => {
  console.error("🔥 SERVER ERROR:", err.message);

  // Prevent CORS breaking on error
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Credentials", "true");

  res.status(500).json({
    success: false,
    message: "Server error",
    error: err.message,
  });
});

// ============================
// 🚀 START SERVER
// ============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});