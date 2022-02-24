import express from "express";
import { Order, OrdersStore } from "../models/Order";
import jwt from "jsonwebtoken";

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
    const authorizationHeader = req.headers.authorization;
    const token = String(authorizationHeader).split(" ")[1];
    jwt.verify(token, String(process.env.TOKEN_SECRET));
  } catch (err) {
    res.status(401);
    res.json("Access denied, invalid token");
    return;
  }

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
    const authorizationHeader = _req.headers.authorization;
    const token = String(authorizationHeader).split(" ")[1];
    jwt.verify(token, String(process.env.TOKEN_SECRET));
  } catch (err) {
    res.status(401);
    res.json("Access denied, invalid token");
    return;
  }
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

const addProduct = async (req: express.Request, res: express.Response) => {
  const orderId: string = req.params.id;
  const productId: string = req.body.productId;
  const quantity: number = parseInt(req.body.quantity);

  try {
    const authorizationHeader = req.headers.authorization;
    const token = String(authorizationHeader).split(" ")[1];
    jwt.verify(token, String(process.env.TOKEN_SECRET));
  } catch (err) {
    res.status(401);
    res.json("Access denied, invalid token");
    return;
  }

  try {
    const addedProduct = await store.addProduct(quantity, orderId, productId);
    res.json(addedProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const orderRoutes = (app: express.Application) => {
  app.get("/orders", index);
  app.get("/orders/:id", show);
  app.post("/orders", create);
  app.post("/orders/:id/products", addProduct);
};

export default orderRoutes;
