import express from "express";
import jwt from "jsonwebtoken";
import authenticate from "../middlewares/authenticate";
import { CurrentOrder, CurrentOrderStore } from "../models/CurrentOrder";

const store = new CurrentOrderStore();

const showCurentOrder = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const Order = await store.showCurentOrder(parseInt(_req.params.id));
    res.json(Order);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const showOrderRoutes = (app: express.Application) => {
  app.get("/showOrder/:id", authenticate, showCurentOrder);
};

export default showOrderRoutes;
