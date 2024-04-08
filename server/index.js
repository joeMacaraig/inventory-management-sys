import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DBURI = process.env.DBURI;

// middleware
app.use(express.static("public"));
app.use(express.json());

// routes
//app.use(userRoutes)

// database connection
mongoose
  .connect(DBURI)
  .then((res) =>
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}.`))
  )
  .catch((err) => console.log(err));