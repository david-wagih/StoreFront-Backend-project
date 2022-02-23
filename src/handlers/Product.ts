import express from "express";
import { Product, ProductsStore } from "../models/Product";

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

const show = async (req: express.Request, res: express.Response) => {
  try {
    const Product = await store.show(parseInt(req.params.id));
    res.json(Product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create = async (_req: express.Request, res: express.Response) => {
  const product: Product = {
    name: _req.body.name,
    price: parseInt(_req.body.price),
    id: 0,
  };

  try {
    const Product = await store.create(product);
    res.json(Product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
// other Handlers

const productRoutes = (app: express.Application) => {
  app.get("/products", index);
  app.get("/products/:id", show);
  app.post("/products", create);
};

export default productRoutes;
