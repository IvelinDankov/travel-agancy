import handlebars from "express-handlebars";

function setHbs(app) {
  app.engine(
    "hbs",
    handlebars.engine({
      extname: "hbs",
    })
  );

  app.set("view engine", "hbs");
  app.set("views", "src/views");
}

export default setHbs;
