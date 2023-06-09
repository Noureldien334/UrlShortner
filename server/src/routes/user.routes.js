import { getUsers, signUp, login } from "../controllers/user.controller.js";
import { Router } from "express";

export const userRouter = Router();

userRouter
  .get("/users", getUsers)
  .post("/users/signup", signUp)
  .post("/users/login", login);
