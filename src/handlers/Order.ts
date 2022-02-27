import express from "express";
import { Order, OrdersStore } from "../models/Order";
import jwt from "jsonwebtoken";
import authenticate from "../middlewares/authenticate";

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

const show = async (req: express.Request, res: express.Response) => {
  try {
    const userId: number = parseInt(req.params.id);
    const orders = await store.show(userId);
    res.json(orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create = async (_req: express.Request, res: express.Response) => {
  try {
    // @ts-ignore
    const order: Order = {
      userId: parseInt(_req.body.userId),
      status: _req.body.status,
    };

    const neworder = await store.create(order);
    res.json(neworder);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const updateOrder = async (req: express.Request, res: express.Response) => {
  const orderId = req.params.id;
  const status = req.body.status;

  try {
    const updatedOrder = await store.updateOrder(Number(orderId), status);
    res.json(updatedOrder);
  } catch (err) {
    res.status(400);
  }
};

const deleteOrder = async (req: express.Request, res: express.Response) => {
  const orderId = req.params.id;
  try {
    const deletedOrder = await store.deleteOrder(Number(orderId));
    res.json(deletedOrder);
  } catch (err) {
    res.status(400);
  }
};

const orderRoutes = (app: express.Application) => {
  app.get("/orders", index);
  app.get("/orders/:id", authenticate, show);
  app.post("/orders", authenticate, create);
  app.put("/orders/:id", authenticate, updateOrder);
  app.delete("/orders/:id", authenticate, deleteOrder);
};

export default orderRoutes;
