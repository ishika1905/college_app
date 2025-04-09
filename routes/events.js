import express from 'express';
import allEvents from '../seed/eventdata.js';

const router = express.Router();

// GET /events - fetch all events
router.get('/', (req, res) => {
  res.status(200).json(allEvents);
});

export default router;
