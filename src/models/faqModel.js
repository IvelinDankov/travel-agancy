import { Schema, model } from "mongoose";

const FAQSchema = new Schema({
  question: String,
  answer: String,
});

const faqModel = model("faqModel", FAQSchema);

export default faqModel;
