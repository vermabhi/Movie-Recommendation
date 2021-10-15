const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/find", (req, res) => {
  res.send("oj");
});

app.listen(3000, (req, res) => {
  console.log("Movie app started at 3000 port!!");
});
