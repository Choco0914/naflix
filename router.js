import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("user"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
