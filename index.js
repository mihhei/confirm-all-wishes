const express = require("express");
const app = express();

app.use(express.json({ extends: true }));

app.use("/api/cart", require("./routes/cart.routes.js"));

app.use("/api/user", require("./routes/user.routes.js"));


if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.redirect("/");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}...`);
});
