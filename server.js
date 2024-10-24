// backend/server.js
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";

import { submitCustomerData } from "./customerController.js"; // Adjust the path as needed

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected🎉".bgMagenta.white))
  .catch((err) => console.log(err));

// API endpoint for submitting customer data
app.post("/api/customers", submitCustomerData);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}🚀`.bgCyan.white);
});
