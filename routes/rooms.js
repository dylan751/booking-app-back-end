import express from 'express';
import {
  createRoom,
  deleteRoom,
  getRoom,
  getMultipleRooms,
  getAllRooms,
  updateRoom,
  updateRoomAvailability,
  getRoomCount,
} from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Get all room's count
router.get('/count', getRoomCount);

// Create
// router.post('/:hotelId', verifyAdmin, createRoom);
router.post('/', createRoom);

// Update
// router.put('/:id', verifyAdmin, updateRoom);
router.put('/:id', updateRoom);
router.put('/availability/:id', updateRoomAvailability);

// Delete
// router.delete('/:id/:hotelId', verifyAdmin, deleteRoom);
router.delete('/:id/:hotelId', deleteRoom);

// // Get 1 room
router.get('/:id', getRoom);

// Get multiple rooms
router.get('/multiple/:ids', getMultipleRooms);

// Get all rooms
router.get('/', getAllRooms);

export default router;
