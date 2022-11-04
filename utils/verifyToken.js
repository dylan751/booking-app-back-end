import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, 'Your are not authenticated!'));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(createError(403, 'Token is not valid!'));
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
      return next(createError(403, 'You are not authorized!'));
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
      return next(createError(403, 'You are not authorized!'));
    }
  });
};
