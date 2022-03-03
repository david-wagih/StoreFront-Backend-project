import { User, UsersStore } from "../models/User";
import express from "express";
import jwt from "jsonwebtoken";
import authenticate from "../middlewares/authenticate";

const store = new UsersStore();

const index = async (req: express.Request, res: express.Response) => {
  try {
    const user = await store.index();
    res.json(user);
  } catch (err) {
    res.status(404);
    res.json(err);
  }
};

const show = async (req: express.Request, res: express.Response) => {
  const id = req.params.id;
  try {
    const user = await store.show(parseInt(id));
    res.json(user);
  } catch (err) {
    res.status(404);
    res.json(err);
  }
};

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

const login = async (req: express.Request, res: express.Response) => {
  // @ts-ignore
  const user: User = {
    firstName: req.body.firstName,
    password: req.body.password,
  };
  try {
    const u = await store.login(user);
    var token = jwt.sign({ user: u }, String(process.env.TOKEN_SECRET));
    res.json(token);
  } catch (error) {
    res.status(401);
    res.json({ error });
  }
};

const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const updatedUser = await store.updateUser(Number(req.params.id), req.body);
    res.json(updatedUser);
  } catch (err) {
    res.status(404);
    res.json(err);
  }
};

const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const deletedUser = await store.deleteUser(Number(req.params.id));
    res.json(deletedUser);
  } catch (err) {
    res.status(404);
    res.json(err);
  }
};

const userRoutes = (app: express.Application) => {
  app.get("/user", authenticate, index);
  app.get("/user/:id", authenticate, show);
  app.post("/user", create);
  app.post("/user/login", login);
  app.delete("/user/:id", authenticate, deleteUser);
  app.put("/user/:id", authenticate, updateUser);
};

export default userRoutes;
