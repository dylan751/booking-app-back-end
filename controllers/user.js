import User from '../models/User.js';
import Form from '../models/Form.js';

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted!');
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find()
      .limit(req.query.limit)
      .skip(req.query.offset);
    res.status(200).json(allUsers);
  } catch (err) {
    next(err);
  }
};

export const getUserReservation = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const reservations = await Form.find({ userId: userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(reservations);
  } catch (err) {
    next(err);
  }
};
