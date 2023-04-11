const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const { result } = require("lodash");
const { render } = require("ejs");

const app = express();

//connect to mongoDB
const db_URI =
  "mongodb+srv://admin:admin@firstcluster.uyl0n.mongodb.net/node-course?retryWrites=true&w=majority";
mongoose
  .connect(db_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register ejs
app.set("view engine", "ejs");

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//listening and sending response
app.get("/", (req, res) => {
  res.redirect("/blogs");
});


app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});


//blog routes
app.use('/blogs' , blogRoutes);


//404 should always be placed at the end.
app.use((req, res) => {
  res.status(404).render("404", { title: 404 });
});
