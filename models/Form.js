import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  isTravelForWork: {
    type: Boolean,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  whoBookingFor: {
    type: Boolean,
  },
  specialRequest: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  hotelId: {
    type: String,
  },
  roomIds: {
    type: String,
  },
  startDate: { type: Date },
  endDate: { type: Date },
});

export default mongoose.model('Form', FormSchema);
