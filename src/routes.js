import { Router } from "express";
import homeController from "./controllers/homeController.js";
import blogController from "./controllers/blogController.js";
import destinationController from "./controllers/destinationController.js";
import authController from "./controllers/authController.js";

const routes = Router();

routes.use(homeController);
routes.use(blogController);
routes.use(destinationController);
routes.use(authController);

export default routes;
