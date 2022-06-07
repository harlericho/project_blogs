const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

// todo: configuration dotenv
dotenv.config();

// todo: configuration express
const app = express();

// todo: configuration port
app.set("port", process.env.PORT || 3000);

// todo: configuration middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// todo: configuration routes
app.use("/api", require("../config/api"));

// todo: export app
module.exports = app;
