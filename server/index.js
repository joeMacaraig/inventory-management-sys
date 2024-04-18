import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DBURI = process.env.DBURI;

// middleware
app.use(express.static("public"));
app.use(express.json());

// routes
app.use(userRouter);

// database connection
mongoose
.set("strictQuery", false)
  .connect(DBURI, { dbName: "InventoryManagement" })
  .then((res) =>
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}.`))
  )
  .catch((err) => console.log(err));
