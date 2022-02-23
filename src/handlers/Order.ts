import express from "express";
import { Order, OrdersStore } from "../models/Order";

const store = new OrdersStore();

const index = async (_req: express.Request, res: express.Response) => {
  try {
    const Orders = await store.index();
    res.json(Orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// handler for the addProduct method in the Order Model
const addProduct = async (_req: express.Request, res: express.Response) => {
  const orderId: string = _req.params.id;
  const productId: string = _req.body.productId;
  const quantity: number = parseInt(_req.body.quantity);

  try {
    const addedProduct = await store.addProduct(quantity, orderId, productId);
    res.json(addedProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// this method to show all orders of a user
const show = async (req: express.Request, res: express.Response) => {
  const userId: number = parseInt(req.params.id);

  try {
    const orders = await store.show(userId);
    res.json(orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Handler for CREATE METHOD that creates new order
const create = async (_req: express.Request, res: express.Response) => {
  const order: Order = {
    userId: parseInt(_req.body.userId),
    status: _req.body.status,
    id: 0,
  };

  try {
    const neworder = await store.create(order);
    res.json(neworder);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// other Handlers

const orderRoutes = (app: express.Application) => {
  app.get("/orders", index);
  app.get("/orders/:id", show);
  app.post("/orders", create);
  app.post("/orders/:id/products", addProduct);
};

export default orderRoutes;
