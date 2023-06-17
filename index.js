const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public"), { etag: false }));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res, next) => {
  let data = {
    name: "Ironhacker",
    bootcamp: "<h2>Berlin</h2>",
    isAllowed: false,
    address: "Address here",
    cities: [
      "Amsterdam",
      "Barcelona",
      "Berlin",
      "Lisbon",
      "Madrid",
      "Mexico City",
      "Miami",
      "Paris",
      "Sao Paulo",
    ],
    objExample: {
      name: "Omar",
      language: "Javascript",
    },
  };
  res.render("index", data);
});

app.listen(3000);
