import express from 'express';

import {
  deleteUser,
  getUser,
  getAllUsers,
  updateUser,
  getUserReservation,
  getUserCount,
} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('Hello user, you are logged in!');
// });
// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('Hello user, you are logged in and you can delete your account!');
// });
// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('Hello admin, you are logged in and you can delete all account!');
// });

// Get all user's count
router.get('/count', getUserCount);

// Update
router.put('/:id', verifyUser, updateUser);

// Delete
// router.delete('/:id', verifyUser, deleteUser);
router.delete('/:id', deleteUser);

// Get
// router.get('/:id', verifyUser, getUser);
router.get('/:id', getUser);

// Get all
// router.get('/', verifyAdmin, getAllUsers);
router.get('/', getAllUsers);

// Get all user's reservation history
// router.get('/:id/reservation', verifyUser, getUserReservation);
router.get('/:id/reservation', getUserReservation);

export default router;
