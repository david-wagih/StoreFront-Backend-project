import express from "express";
import { Product, ProductsStore } from "../models/Product";
import jwt from "jsonwebtoken";
import authenticate from "../middlewares/authenticate";

const store = new ProductsStore();

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

const create = async (req: express.Request, res: express.Response) => {
  try {
    // @ts-ignore
    const product: Product = {
      name: req.body.name,
      price: req.body.price,
    };

    const newProduct = await store.create(product);
    res.json(newProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const deleteProduct = async (req: express.Request, res: express.Response) => {
  try {
    // @ts-ignore
    const deletedProduct = await store.delete(req.params.id);
    res.json(deletedProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const productRoutes = (app: express.Application) => {
  app.get("/products", index);
  app.get("/products/:id", show);
  app.post("/products", authenticate, create);
  app.delete("/products/:id", authenticate, deleteProduct);
};

export default productRoutes;
