import { Router } from "express";

const authController = Router();

authController.get("/signup", (req, res) => {
  res.render("signup");
});
authController.get("/login", (req, res) => {
  res.render("login");
});

export default authController;
