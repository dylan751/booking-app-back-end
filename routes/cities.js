import express from 'express';
import {
  createCity,
  deleteCity,
  getCity,
  getAllCities,
  updateCity,
  getCityCount,
} from '../controllers/city.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Get all city's count
router.get('/count', getCityCount);

// Create
// router.post('/', verifyAdmin, createCity);
router.post('/', createCity);

// Update
// router.put('/:id', verifyAdmin, updateCity);
router.put('/:id', updateCity);

// Delete
// router.delete('/:id', verifyAdmin, deleteCity);
router.delete('/:id', deleteCity);

// Get
router.get('/:id', getCity);

// Get all
router.get('/', getAllCities);

export default router;
