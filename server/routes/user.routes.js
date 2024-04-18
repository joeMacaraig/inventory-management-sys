// user routes
import express from "express";
import { User } from "../models/user.js";

export const userRouter = express.Router();

// signup
userRouter.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await User.find({ email: email });
      const createUser = await User.create({ email, password });
      console.log(!user);
      return res
        .status(200)
        .send({ message: `successfully signup user ✅`, data: createUser });
    }
  } catch (err) {
    return res.status(404).send({ message: `${err} `, data: {} });
  }
});

// login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (err) {
    return res.status.send({ message: err });
  }
});
