import { Schema, model } from "mongoose";

const DestinationsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  reviews: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  city: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Destination = model("Destination", DestinationsSchema);

export default Destination;
