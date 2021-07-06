// Read .env file
// const dotenv = require("dotenv");
// import dotenv from 'dotenv'

import express from "express";
import db from "./db/connection.js";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", routes);
console.log(db);
db.on(
  "error",
  console.error.bind(console, "(server) MongoDB connection error")
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
