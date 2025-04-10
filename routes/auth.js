import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
    const { name, email, college_name, password, confirm_password } = req.body;

    if (password !== confirm_password) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, college_name, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// // Login
// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     console.log("Login request for:", email);

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             console.log("❌ User not found");
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             console.log("❌ Incorrect password");
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         console.log("✅ Login successful");
//         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//         res.json({ token, userId: user._id });
//     } catch (error) {
//         console.error("Login error:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// });
// Login (TEMP BYPASS)
router.post("/login", async (req, res) => {
    console.log("⚠️ TEMP LOGIN BYPASS — always successful");

    // Dummy user data
    const fakeUser = {
        _id: "1234567890",
        name: "Test User",
        email: "test@example.com"
    };

    // Dummy token string
    const token = "fake-jwt-token";

    res.status(200).json({
        token,
        userId: fakeUser._id
    });
});

// Logout
router.get("/logout", (req, res) => {
    res.json({ message: "Logged out (client-side token removed)" });
});

export default router;
