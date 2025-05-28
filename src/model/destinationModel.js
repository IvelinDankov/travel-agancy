import { Schema, model } from "mongoose";

const DestinationsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  },
  reviews: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
});

const Destination = model("Destination", DestinationsSchema);

export default Destination;
