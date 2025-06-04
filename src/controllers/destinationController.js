import { Router } from "express";
import homeService from "../services/homeService.js";

const destinationController = Router();

destinationController.get("/destination", async (req, res) => {
  const destinations = await homeService.getAll();
  res.render("destination", { destinations });
});
destinationController.get("/:id/destination-details", async (req, res) => {
  const destinationId = req.params.id;

  const destination = await homeService.getOne(destinationId);

  res.render("destination-details", { destination });
});

destinationController.get("/search", async (req, res) => {
  const destinations = await homeService.getAll();

  res.render("search", { destinations });
});

export default destinationController;
