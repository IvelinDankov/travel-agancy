import Destination from "../model/destinationModel.js";

export default homeService = {
  async getAll() {
    return await Destination.find();
  },
};
