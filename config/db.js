import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ananya013btcsai22:07zNwo70LPeBcoJu@cluster0.pjydbfi.mongodb.net/food-delivery')
    .then(() => {
        console.log("✅ MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
    });
};
