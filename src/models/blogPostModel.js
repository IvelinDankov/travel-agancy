import { Schema, model } from "mongoose";

const BlockSchema = new Schema({
  title: String,
  description: String,
  author: String,
  image: String,
  data: String,
});

const blogpost = model("blogpost", BlockSchema);

export default blogpost;
