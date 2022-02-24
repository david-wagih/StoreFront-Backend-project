import express from "express";
import { Product, ProductsStore } from "../models/Product";
import jwt from "jsonwebtoken";

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
    const authorizationHeader = req.headers.authorization;
    const token = String(authorizationHeader).split(" ")[1];
    jwt.verify(token, String(process.env.TOKEN_SECRET));
  } catch (err) {
    res.status(401);
    res.json("Access denied, invalid token");
    return;
  }

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

const productRoutes = (app: express.Application) => {
  app.get("/products", index);
  app.get("/products/:id", show);
  app.post("/products", create);
};

export default productRoutes;
