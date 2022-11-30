import jwt from 'jsonwebtoken';
import { createError } from './error.js';
import {
  HTTP_EXCEPTION_ERROR_CODE,
  HTTP_EXCEPTION_ERROR_MESSAGES,
} from '../constants/errorMessage.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(
      createError(
        HTTP_EXCEPTION_ERROR_CODE.USER_NOT_AUTHENTICATED,
        HTTP_EXCEPTION_ERROR_MESSAGES.USER_NOT_AUTHENTICATED,
      ),
    );
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(
        createError(
          HTTP_EXCEPTION_ERROR_CODE.INVALID_JWT_TOKEN,
          HTTP_EXCEPTION_ERROR_MESSAGES.INVALID_JWT_TOKEN,
        ),
      );
    }
    req.user = user;

    next(); // Go to /checkauthentication route
  });
};

// Check user's authorization (to delete account, ...)
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    // Only the owner of the account or the Admin can delete this account
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(
        createError(
          HTTP_EXCEPTION_ERROR_CODE.USER_NOT_AUTHORIZED,
          HTTP_EXCEPTION_ERROR_MESSAGES.USER_NOT_AUTHORIZED,
        ),
      );
    }
  });
};

// Check if user is Admin or not
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    // Only the owner of the account or the Admin can delete this account
    if (req.user.isAdmin) {
      next();
    } else {
      return next(
        createError(
          HTTP_EXCEPTION_ERROR_CODE.USER_NOT_AUTHORIZED,
          HTTP_EXCEPTION_ERROR_MESSAGES.USER_NOT_AUTHORIZED,
        ),
      );
    }
  });
};
