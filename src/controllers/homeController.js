import { Router } from "express";
import homeService from "../services/homeService.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
  const topDestinations = await homeService.topDestinations();
  const destinations = await homeService.getAll();
  //   await homeService.create();

  // await homeService.createTeamUser();

  const ourTeam = await homeService.getTeam();
  const bestReviews = await homeService.getTendingDestinations();

  const FAQs = await homeService.getFAQ();
  const testimonials = await homeService.getTestimonials();
  const blogPosts = await homeService.getAllBlogs();

  res.render("home", {
    topDestinations,
    destinations,
    ourTeam,
    bestReviews,
    FAQs,
    testimonials,
    blogPosts,
  });
});

homeController.get("/contact", (req, res) => {
  res.render("contact");
});
homeController.get("/about", (req, res) => {
  res.render("about");
});

export default homeController;
