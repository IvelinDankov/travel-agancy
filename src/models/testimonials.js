import { Schema, model } from "mongoose";

const testimonialSchema = new Schema({
  name: String,
  imageUrl: String,
  feedback: String,
  rating: Number,
});

const Testimonials = model("Testimonials", testimonialSchema);

export default Testimonials;
