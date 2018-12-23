import express from "express";
import routes from "../routes";
import {
  show,
  videos,
  originals,
  trailers,
  search
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.home, videos);
videoRouter.get(routes.search, search);
videoRouter.get(routes.originals, originals);
videoRouter.get(routes.trailers, trailers);
videoRouter.get(routes.show(), show);

export default videoRouter;
