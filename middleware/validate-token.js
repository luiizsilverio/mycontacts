import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const validateToken = asyncHandler(async(req, res, next) => {
  let authHeader = req.headers.Authorization || req.headers.authorization;
  let token;

  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      } else {
        req.user = decoded.user;
        next();
      }
    })
  }

  if (!token) {
    res.status(401);
    throw new Error("User is not authorized or token is missing");
  }
})

export default validateToken;
