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
  description: {
    type: String,
    required: true,
  },
});

const Destination = model("Destination", DestinationsSchema);

export default Destination;
