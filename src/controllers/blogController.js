import { Router } from "express";

const blogController = Router();

blogController.get("/blog", (req, res) => {
  res.render("blog");
});

export default blogController;
