import City from '../models/City.js';

export const createCity = async (req, res, next) => {
  const newCity = new City(req.body);

  try {
    const savedCity = await newCity.save();
    res.status(200).json(savedCity);
  } catch (err) {
    next(err);
  }
};

export const updateCity = async (req, res, next) => {
  try {
    const updatedCity = await City.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedCity);
  } catch (err) {
    next(err);
  }
};

export const deleteCity = async (req, res, next) => {
  try {
    await City.findByIdAndDelete(req.params.id);
    res.status(200).json('City has been deleted!');
  } catch (err) {
    next(err);
  }
};

export const getCity = async (req, res, next) => {
  try {
    const city = await City.findById(req.params.id);
    res.status(200).json(city);
  } catch (err) {
    next(err);
  }
};

export const getAllCities = async (req, res, next) => {
  const featured = req.query.featured;
  let allCities;
  try {
    if (featured) {
      allCities = await City.find({ featured })
        .limit(req.query.limit)
        .skip(req.query.offset);
    } else {
      allCities = await City.find()
        .limit(req.query.limit)
        .skip(req.query.offset);
    }
    res.status(200).json(allCities);
  } catch (err) {
    next(err);
  }
};

export const getCityCount = async (req, res, next) => {
  try {
    const cityCount = await City.countDocuments({});
    res.status(200).json(cityCount);
  } catch (err) {
    next(err);
  }
};
