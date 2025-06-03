import handlebars from "express-handlebars";

function setHbs(app) {
  app.engine(
    "hbs",
    handlebars.engine({
      extname: "hbs",
      helpers: {
        starRating(rating) {
          let roundedRating = Math.floor(rating);
          // let icon = <i class="fa fa-star-half-o"></i>;
          if (rating > Math.floor(rating) + 0.5) {
            return "⭐".repeat(roundedRating) + "🌟";
          } else {
            return "⭐".repeat(roundedRating);
          }
        },
      },
      runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
      },
    })
  );

  app.set("view engine", "hbs");
  app.set("views", "src/views");
}

export default setHbs;
