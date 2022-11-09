import express from 'express';
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Create
// router.post('/:hotelId', verifyAdmin, createRoom);
router.post('/:hotelId', createRoom);

// Update
// router.put('/:id', verifyAdmin, updateRoom);
router.put('/:id', updateRoom);
router.put('/availability/:id', updateRoomAvailability);

// Delete
// router.delete('/:id/:hotelId', verifyAdmin, deleteRoom);
router.delete('/:id/:hotelId', deleteRoom);

// Get
router.get('/:id', getRoom);

// Get all
router.get('/', getRooms);

export default router;
