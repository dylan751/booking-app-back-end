import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';

export const createRoom = async (req, res, next) => {
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { 'roomNumbers._id': req.params.id },
      { $push: { 'roomNumbers.$.unavailableDates': req.body.dates } },
    );
    res.status(200).json('Room status has been Updated');
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await Room.findByIdAndDelete(req.params.id);
    // Update hotel
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json('Room has been deleted!');
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const getMultipleRooms = async (req, res, next) => {
  const idArr = req.params.ids.split(',');

  try {
    const roomList = await Promise.all(
      idArr.map((roomId) => {
        return Room.find({ 'roomNumbers._id': roomId });
      }),
    );

    // Select unique rooms only
    const formattedRoomList = roomList.map((room) => {
      return room[0];
    });
    const uniqueRoomIdList = Array.from(
      new Set(formattedRoomList.map((item) => item.id)),
    );

    const uniqueRoomList = await Promise.all(
      uniqueRoomIdList.map((roomId) => {
        return Room.findById(roomId);
      }),
    );

    res.status(200).json(uniqueRoomList);
  } catch (err) {
    next(err);
  }
};

export const getAllRooms = async (req, res, next) => {
  try {
    const allRooms = await Room.find()
      .limit(req.query.limit)
      .skip(req.query.offset);
    res.status(200).json(allRooms);
  } catch (err) {
    next(err);
  }
};

export const getRoomCount = async (req, res, next) => {
  try {
    const roomCount = await Room.countDocuments({});
    res.status(200).json(roomCount);
  } catch (err) {
    next(err);
  }
};
