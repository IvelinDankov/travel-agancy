import { Router } from "express";
import homeService from "../services/homeService.js";
import getStars from "../utils/getStars.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
  const topDestinations = await homeService.topDestinations();
  const destinations = await homeService.getAll();
  //   await homeService.create();

  // await homeService.createTeamUser();

  const ourTeam = await homeService.getTeam();
  const bestReviews = await homeService.getTendingDestinations();

  res.render("home", {
    topDestinations,
    destinations,
    ourTeam,
    bestReviews,
  });
});

homeController.get("/contact", (req, res) => {
  res.render("contact");
});
homeController.get("/about", (req, res) => {
  res.render("about");
});

export default homeController;
