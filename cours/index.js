const express = require("express");
const cors = require("cors");
const app = express();
const planetRouter = require("./routes/planet.router");
const mongoose = require("mongoose");
const PORT = 3000;
const User = require("./model/user.model");
const jwt = require('jsonwebtoken');
const auth = require("./auth");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_CONNECTION)
  .then((res) => console.log("connected to database"))
  .then((res) =>
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err));

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/login", (req, res) => {
  User.findOne({ name: req.body.name, password: req.body.password }).then((result) => {
    const userobj = {name:req.body.name};
    const token = jwt.sign(userobj, process.env.SECRET_TOKEN);
    res.json({accessToken: token});
  }).catch((err) => {res.send(err)});
});

app.get("/", auth, (req, res) => {
  res.send("Bienvenue sur mon serveur");
});
app.use("/planets", planetRouter);
