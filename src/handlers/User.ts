import { User, UsersStore } from "../models/User";
import express from "express";

const store = new UsersStore();
const create = async (req: express.Request, res: express.Response) => {
  const { firstName, lastName, password } = req.body;
  const user: User = {
    firstName,
    lastName,
    password,
    id: 0,
  };
  try {
    const newUser = await store.create(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const userRoutes = (app: express.Application) => {
  app.post("/user", create);
};

export default userRoutes;
