import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import { HTTP_EXCEPTION_ERROR_MESSAGES } from '../constants/errorMessage.js';
import { HTTP_EXCEPTION_ERROR_CODE } from '../constants/errorMessage.js';

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).send('User has been created.');
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return next(
        createError(
          HTTP_EXCEPTION_ERROR_CODE.USER_DOES_NOT_EXIST,
          HTTP_EXCEPTION_ERROR_MESSAGES.USER_DOES_NOT_EXIST,
        ),
      );

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!isPasswordCorrect)
      return next(
        createError(
          HTTP_EXCEPTION_ERROR_CODE.INVALID_PASSWORD,
          HTTP_EXCEPTION_ERROR_MESSAGES.INVALID_PASSWORD,
        ),
      );

    const token = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
