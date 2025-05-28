import { Router } from "express";

const destinationController = Router();

destinationController.get("/destination", (req, res) => {
  res.render("destination");
});
destinationController.get(
  "/destination/:id/destination-details",
  (req, res) => {
    res.render("destination-details");
  }
);

export default destinationController;
