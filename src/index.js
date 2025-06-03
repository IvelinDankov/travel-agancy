import express from "express";
import mongoose from "mongoose";

import routes from "./routes.js";
import setHbs from "./config/setHbs.js";
const port = 3015;

const app = express();

app.use("/static", express.static(`src/public`));
// app.use("./images", express.static("src/public"));

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/destinations");

  console.log("mongoose is connected");
}

setHbs(app);

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
