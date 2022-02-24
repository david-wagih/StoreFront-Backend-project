import express from "express";
import jwt from "jsonwebtoken";
import { CurrentOrder, CurrentOrderStore } from "../models/CurrentOrder";

const store = new CurrentOrderStore();

const showCurentOrder = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const authorizationHeader = _req.headers.authorization;
    const token = String(authorizationHeader).split(" ")[1];
    jwt.verify(token, String(process.env.TOKEN_SECRET));
  } catch (err) {
    res.status(401);
    res.json("Access denied, invalid token");
    return;
  }
  try {
    const Order = await store.showCurentOrder(parseInt(_req.params.id));
    res.json(Order);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const showOrderRoutes = (app: express.Application) => {
  app.get("/showOrder/:id", showCurentOrder);
};

export default showOrderRoutes;
