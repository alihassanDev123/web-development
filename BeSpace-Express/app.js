const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("home"));
app.get("/technology", (req, res) => res.render("technology"));
app.get("/staff", (req, res) => res.render("staff"));
app.get("/articles", (req, res) => res.render("articles"));
app.get("/about", (req, res) => res.render("about"));

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
