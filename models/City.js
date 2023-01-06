import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    country: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model('City', CitySchema);
