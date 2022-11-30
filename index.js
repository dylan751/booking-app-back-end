import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './api/routes/auth.js';
import usersRoute from './api/routes/users.js';
import hotelsRoute from './api/routes/hotels.js';
import roomsRoute from './api/routes/rooms.js';
import formsRoute from './api/routes/forms.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

dotenv.config();

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log('Connected to MongoDB!');
//   } catch (error) {
//     throw error;
//   }
// };

// mongoose.connection.on('disconnected', () => {
//   console.log('MongoDB disconnected!');
// });

// Middlewares
app.use(cors()); // Enable cors
app.use(cookieParser());
app.use(express.json());

// app.use('/api/auth', authRoute);
// app.use('/api/users', usersRoute);
// app.use('/api/hotels', hotelsRoute);
// app.use('/api/rooms', roomsRoute);
// app.use('/api/forms', formsRoute);

// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || 'Something went wrong!';
//   return res.status(errorStatus).json({
//     success: false,
//     status: errorStatus,
//     message: errorMessage,
//     stack: err.stack,
//   });
// });

const port = process.env.PORT || 4000;
app.listen(port, (req, res) => {
  // connect();
  console.log('Connected to backend.');
});
app.use('/', (req, res) => {
  res.status(200).json('Hello World');
});
