import express from "express";
import eventRoutes from './routes/events.js';
import authRoutes from "./routes/auth.js";

import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

// ✅ Allow requests from local dev and ngrok frontend (replace URLs with yours)
const allowedOrigins = [
  "http://localhost:4000",
  "https://6b36-2405-201-4024-6d-30b0-9647-da7d-e160.ngrok-free.app",
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow curl/postman
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS not allowed from this origin"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.get("/", (req, res) => res.send("✅ Server is running on port 4000!"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/events", eventRoutes);

// ✅ Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
