import { Schema, model } from "mongoose";

const TeamSchema = new Schema({
  image: String,
  name: String,
  role: String,
});

const Team = model("Team", TeamSchema);

export default Team;
