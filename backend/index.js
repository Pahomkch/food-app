require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/index");

const PORT = process.env.PORT || 5000;
const app = express();

const mongoURI = process.env.DB_WAY;

app.use(cors());

async function start() {
  try {
    mongoose
      .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      //await. Not than
      .then(() => console.log("DB connect success"));

    //use our routes in app
    app.use("/api", routes);
    app.listen(PORT, function () {
      console.log(`Server is run on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("NODEJS Server error:" + error.message);
    process.exit(1);
  }
}

start();
