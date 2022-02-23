import express from "express";
import { OrdersStore } from "../models/Order";
import { ProductsStore } from "../models/Product";

const store = new ProductsStore();

// handler for the addProduct method in the Order Model
const index = async (_req: express.Request, res: express.Response) => {
  try {
    const Products = await store.index();
    res.json(Products);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// other Handlers

const productRoutes = (app: express.Application) => {
  //   app.get("/orders", index);
  //   app.get("/orders/:id", show);
  //   app.post("/orders", create);
  app.get("/products", index);
};

export default productRoutes;
