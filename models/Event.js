import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    venue:{
        type: String,
        required: true,
    },
    genre:{
        type: String,
        required: true,
    },
    college: {
        type:String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    registeration_link: {
        type: String,
        required: true,
    },
    registration_deadline:{
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const EventModel = mongoose.model("Event", eventSchema);
export default EventModel;
