import blogpost from "../models/blogPostModel.js";

const blogService = {
  async getAllBlocks() {
    return await blogpost.find().lean();
  },
};

export default blogService;
