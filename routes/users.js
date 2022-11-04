import express from 'express';

import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/user.js';

const router = express.Router();

// Update
router.put('/:id', updateUser);

// Delete
router.delete('/:id', deleteUser);

// Get
router.get('/:id', getUser);

// Get all
router.get('/', getUsers);

export default router;
