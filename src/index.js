import express from "express";

import routes from "./routes.js";
import setHbs from "./config/setHbs.js";
const port = 3015;

const app = express();

app.use(express.static("src/public"));

setHbs(app);

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
