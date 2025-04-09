import mongoose from "mongoose";
import { connectDB } from "../config/db.js";
import Event from "../models/Event.js";
import allEvents from "./eventdata.js";

const seedEvents = async () => {
  try {
    await connectDB();

    // Optional: clear previous events
    await Event.deleteMany();
    console.log("🧹 Previous events deleted.");

    // Insert new events
    await Event.insertMany(allEvents);
    console.log("✅ Events inserted successfully!");

    // Disconnect after seeding
    mongoose.disconnect();
    console.log("🔌 MongoDB connection closed.");
  } catch (error) {
    console.error("❌ Seeding error:", error);
  }
};

seedEvents();
