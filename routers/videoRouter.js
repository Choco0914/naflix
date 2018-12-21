import express from "express";
import routes from "../routes";
import { show, videos } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.show, show);

export default videoRouter;
