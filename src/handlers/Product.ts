import express from "express";
import { Product, ProductsStore } from "../models/Product";
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
    const Product = await store.show(Number(req.params.id));
    res.json(Product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create = async (req: express.Request, res: express.Response) => {
  try {
    const newProduct = await store.create(req.body);
    res.json(newProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const updateProduct = async (req: express.Request, res: express.Response) => {
  try {
    // @ts-ignore
    const updatedProduct = await store.update(req.params.id, req.body);
    res.json(updatedProduct);
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
  app.put("/products/:id", authenticate, updateProduct);
};

export default productRoutes;
