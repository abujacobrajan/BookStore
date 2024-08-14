import express from "express";
import { PORT, MONGO_BASE_URI } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/books", booksRoute);

mongoose
  .connect(MONGO_BASE_URI)
  .then(() => {
    console.log("App connected to the database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error.message);
  });
