import Destination from "../models/destinationModel.js";
import faqModel from "../models/faqModel.js";
import Team from "../models/team.js";
import Testimonials from "../models/testimonials.js";

const homeService = {
  async getAll() {
    return await Destination.find({}).lean();
  },
  async topDestinations() {
    let destinations = await Destination.find({
      rating: { $gt: 4.85 },
    }).lean();

    if (destinations.length > 8) {
      destinations.length = 8;
    }

    return destinations;
  },
  async create() {
    return await Destination.create({
      title: "Reykjavik, Iceland",
      imageUrl: "reykjavik.jpg",
      rating: 4.5,
      reviews: 100,
      description:
        "A gateway to Iceland's dramatic landscapes, including geysers and the Northern Lights.",
      type: "adventure",
    });
  },

  async createTeamUser() {
    return await Team
      .create
      // {
      //   image: "pics/team-2",
      //   name: "Jane Smith",
      //   role: "Product Designer",
      // }
      // {
      //   image: "pics/team-3",
      //   name: "Michael Brown",
      //   role: "Lead Developer",
      // }
      ();
  },

  async getTendingDestinations() {
    return await Destination.find({ reviews: { $gt: 250 } }).lean();
  },

  async getTeam() {
    return await Team.find({}).lean();
  },

  async getFAQ() {
    return faqModel.find().lean();
  },

  async createFAQ() {
    return faqModel.create();
  },

  async getTestimonials() {
    return Testimonials.find().lean();
  },
};

export default homeService;
