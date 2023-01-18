import Hotel from '../models/Hotel.js';
import Room from '../models/Room.js';

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel has been deleted!');
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getAllHotels = async (req, res, next) => {
  const { min, max, distance, ...others } = req.query;
  try {
    let allHotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gte: min || 1, $lte: max || 999 },
    })
      .limit(req.query.limit)
      .skip(req.query.offset);

    // Filter by hotel's distance from center of the city (Find hotels have distance less or equal than) - OR
    if (distance) {
      allHotels = await allHotels.filter((hotel) =>
        // If distance is 'string' => has to convert to array first
        typeof distance === 'string'
          ? parseInt(hotel.distance) <= parseInt(distance)
          : parseInt(hotel.distance) <= Math.max(...distance),
      );
    }

    // Filter by tag (Find hotels includes all the tags) - AND
    if (req.query.tag) {
      allHotels = await allHotels.filter((hotel) =>
        // If tag is 'string' => has to convert to array first
        typeof req.query.tag === 'string'
          ? req.query.tag.split().every((v) => hotel.tags.includes(v))
          : req.query.tag.every((v) => hotel.tags.includes(v)),
      );
    }

    res.status(200).json(allHotels);
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
