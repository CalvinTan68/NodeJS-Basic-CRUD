import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import DataRoute from "./routes/DataRoute.js";
dotenv.config();

const app = express();

const port = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use("/data", DataRoute);

app.listen(port, () => {
  console.log("APP RUNNING ON PORT", port);
});
