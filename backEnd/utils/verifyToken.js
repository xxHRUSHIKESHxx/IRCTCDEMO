import jwt from "jsonwebtoken";

import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.acess_token;
  if (!token) {
    return next(createError(401, "you are not authenticated"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "token is invalid"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized"));
    }
  });
};

// acess_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmFjMGNhMDYxZThjNjZiYWMzM2M5ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTczMDg5ODZ9.AWBES_cSixBGKFGYteIE0QBpB2wANI5-Y4ao8cs4NtU; Path=/; HttpOnly