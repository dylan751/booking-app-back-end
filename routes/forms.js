import express from 'express';
import {
  createForm,
  deleteForm,
  getForm,
  getAllForms,
  updateForm,
  getFormCount,
} from '../controllers/form.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Get all form's count
router.get('/count', getFormCount);

// Create
// router.post('/', verifyAdmin, createForm);
router.post('/', createForm);

// Update
// router.put('/:id', verifyAdmin, updateForm);
router.put('/:id', updateForm);

// Delete
// router.delete('/:id', verifyAdmin, deleteForm);
router.delete('/:id', deleteForm);

// // Get 1 room
router.get('/:id', getForm);

// Get all rooms
router.get('/', getAllForms);

export default router;
