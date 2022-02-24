import { User, UsersStore } from "../models/User";
import express from "express";
import jwt from "jsonwebtoken";

const store = new UsersStore();
const create = async (req: express.Request, res: express.Response) => {
  // @ts-ignore
  const user: User = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  };
  try {
    const newUser = await store.create(user);
    var token = jwt.sign({ user: newUser }, String(process.env.TOKEN_SECRET));
    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Return a different token when Login is successful
const authenticate = async (req: express.Request, res: express.Response) => {
  // @ts-ignore
  const user: User = {
    firstName: req.body.firstName,
    password: req.body.password,
  };
  try {
    const u = await store.authenticate(user);
    var token = jwt.sign({ user: u }, String(process.env.TOKEN_SECRET));
    res.json(token);
    res.json(u);
  } catch (error) {
    res.status(401);
    res.json({ error });
  }
};

const userRoutes = (app: express.Application) => {
  app.post("/user", create);
  app.post("/user/login", authenticate);
};

export default userRoutes;
