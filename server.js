import express from "express";
import eventRoutes from "./routes/events.js";
import authRoutes from "./routes/auth.js";
import { fetchInstagramPosts } from './insta.js';
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:4000",
  "http://localhost:5173", // Vite default
  "https://6b36-2405-201-4024-6d-30b0-9647-da7d-e160.ngrok-free.app",
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed from this origin"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.get("/", (req, res) => res.send("✅ Server is running on port 4000!"));

app.get("/test", (req, res) => {
  res.json({ message: "✅ Server is running on port 4000!" });
});



// Routes
app.use("/api/auth", authRoutes);
app.use("/events", eventRoutes);

app.get('/insta', async (req, res) => {
  try {
    const profileURL = 'https://www.instagram.com/taarangana/';
    const posts = await fetchInstagramPosts(profileURL);
    res.json({ success: true, posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to fetch Instagram posts' });
  }
});


// ✅ Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));