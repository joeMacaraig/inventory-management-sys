import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DBURI = process.env.DBURI;

// middleware
app.use(express.static("public"));
app.use(express.json());

// routes
//app.use(route)

// database connection
mongoose
  .connect(DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((res) =>
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}.`))
  )
  .catch((err) => console.log(err));
