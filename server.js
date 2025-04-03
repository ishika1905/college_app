import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// App config
const app = express();

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: "*", // Allow all origins (Change in production)
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Default route
app.get("/", (req, res) => {
    res.send("✅ Server is running on port 4000!");
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Start the server on PORT 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
