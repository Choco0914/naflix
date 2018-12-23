import express from "express";
import routes from "../routes";
import { home } from "../controllers/videoController";
import {
  logout,
  postJoin,
  getJoin,
  getLogin,
  postLogin
} from "../controllers/userController";
import { homeIsAuthenticatedMiddleware as check } from "../middlewares/isAuthenticatedMiddlewares";
import app from "../app";

const globalRouter = express.Router();

// Join
globalRouter.get(routes.join, check, getJoin);
globalRouter.post(routes.join, check, postJoin);

// Login
globalRouter.get(routes.login, check, getLogin);
globalRouter.post(routes.login, check, postLogin);

// Home
globalRouter.get(routes.home, check, home);
globalRouter.get(routes.logout, check, logout);

export default globalRouter;
