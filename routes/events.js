import express from 'express';
import EventModel from '../models/event.js';

const router = express.Router();

// GET all events
router.get('/', async (req, res) => {
    console.log("🚀 /events GET endpoint hit");
    try {
      const events = await EventModel.find();
      res.status(200).json(events);
    } catch (error) {
      console.error("❌ Error fetching events:", error);
      res.status(500).json({ error: error.message });
    }
  });
  

// POST a new event
router.post('/', async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      date,
      time,
      venue,
      genre,
      college,
      image,
      registeration_link,
      registration_deadline,
    } = req.body;

    const newEvent = new EventModel({
      title,
      description,
      category,
      date,
      time,
      venue,
      genre,
      college,
      image,
      registeration_link,
      registration_deadline,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
