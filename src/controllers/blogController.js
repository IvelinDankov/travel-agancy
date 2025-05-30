import { Router } from "express";
import blogServce from "../services/blogServce.js";

const blogController = Router();

blogController.get("/blog", async (req, res) => {
  const blogs = await blogServce.getAllBlocks();

  res.render("blog", { blogs });
});

export default blogController;
