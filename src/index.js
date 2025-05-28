import express from "express";

const app = express();

const port = 3015;

app.get("/", (req, res) => {
  res.send("Welcome to expresss.....");
  res.end();
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
