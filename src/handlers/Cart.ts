import express from "express";
import jwt from "jsonwebtoken";
import authenticate from "../middlewares/authenticate";
import { CurrentOrder, CurrentOrderStore } from "../models/Cart";

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

const addProduct = async (req: express.Request, res: express.Response) => {
  const orderId: string = req.params.id;
  const productId: string = req.body.productId;
  const quantity: number = parseInt(req.body.quantity);

  try {
    const addedProduct = await store.addProduct(quantity, orderId, productId);
    res.json(addedProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const showOrderRoutes = (app: express.Application) => {
  app.get("/showOrder/:id", authenticate, showCurentOrder);
  app.post("/orders/:id/products", authenticate, addProduct);
};

export default showOrderRoutes;
