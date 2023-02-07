import Form from '../models/Form.js';
import Room from '../models/Room.js';

export const createForm = async (req, res, next) => {
  const newForm = new Form(req.body);

  try {
    const savedForm = await newForm.save();
    res.status(200).json(savedForm);
  } catch (err) {
    next(err);
  }
};

export const updateForm = async (req, res, next) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedForm);
  } catch (err) {
    next(err);
  }
};

export const deleteForm = async (req, res, next) => {
  try {
    await Form.findByIdAndDelete(req.params.id);
    res.status(200).json('Form has been deleted!');
  } catch (err) {
    next(err);
  }
};

export const getForm = async (req, res, next) => {
  try {
    const form = await Form.findById(req.params.id);
    res.status(200).json(form);
  } catch (err) {
    next(err);
  }
};

export const getAllForms = async (req, res, next) => {
  try {
    const allForms = await Form.find()
      .limit(req.query.limit)
      .skip(req.query.offset);
    res.status(200).json(allForms);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(',');
  try {
    const listHotels = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      }),
    );
    res.status(200).json(listHotels);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: 'Hotel' });
    const apartmentCount = await Hotel.countDocuments({ type: 'Apartment' });
    const resortCount = await Hotel.countDocuments({ type: 'Resort' });
    const villaCount = await Hotel.countDocuments({ type: 'Villa' });
    const cabinCount = await Hotel.countDocuments({ type: 'Cabin' });

    res.status(200).json([
      { type: 'hotels', count: hotelCount },
      { type: 'apartments', count: apartmentCount },
      { type: 'resorts', count: resortCount },
      { type: 'villas', count: villaCount },
      { type: 'cabins', count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.hotelId);
    const roomList = await Promise.all(
      hotel.rooms.map((roomId) => {
        return Room.findById(roomId);
      }),
    );

    res.status(200).json(roomList);
  } catch (err) {
    next(err);
  }
};

export const getFormCount = async (req, res, next) => {
  try {
    const formCount = await Form.countDocuments({});
    res.status(200).json(formCount);
  } catch (err) {
    next(err);
  }
};
