import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectMongo } from "./src/mongoDBconfig.js";
import formRouter from "./router/FormRouter.js";

// initialize the api application
const app = express();

// connect to Mongo
const PORT = process.env.PORT || 8000;
connectMongo();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/form", formRouter);

// run the server
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
