import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ananya013btcsai22:i8T_BdTYZBhE2Bq@cluster0.7yycwou.mongodb.net/events_app')
    .then(() => {
        console.log("✅ MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
    });
};
