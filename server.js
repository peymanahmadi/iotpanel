import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";

app.use(express.json());

const port = 5000;

const start = () => {
  try {
    app.listen(5000, () => {
      console.log(`Server is listening to ${port}...`);
    });
  } catch (error) {}
};

start();
