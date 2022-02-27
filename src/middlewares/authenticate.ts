import express from "express";
import jwt from "jsonwebtoken";

const authenticate = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = String(authorizationHeader);
    jwt.verify(token, String(process.env.TOKEN_SECRET));
    next();
  } catch (err) {
    res.status(401);
    res.json("Access denied, invalid token");
    return;
  }
};

export default authenticate;
