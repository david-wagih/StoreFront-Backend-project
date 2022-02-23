import express from "express";
import { OrdersStore } from "../models/Order";

const store = new OrdersStore();

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

// other Handlers

const orderRoutes = (app: express.Application) => {
  //   app.get("/orders", index);
  //   app.get("/orders/:id", show);
  //   app.post("/orders", create);
  app.post("/orders/:id/products", addProduct);
};

export default orderRoutes;
