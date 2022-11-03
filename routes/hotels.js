import express from 'express';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';

import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../controllers/hotel.js';

const router = express.Router();

// Create
router.post('/', createHotel);

// Update
router.put('/:id', updateHotel);

// Delete
router.delete('/:id', deleteHotel);

// Get
router.get('/:id', getHotel);

// Get all
router.get('/', getHotels);

export default router;
