// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connection = require("./config/db");
const { userRouter } = require("./Routes/Users.routes");
const { enquiryRouter } = require("./Routes/Enquire.routes");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "*"
  })
);
app.use(express.json());

// Welcome message for the root endpoint
app.get("/", (req, res) => {
  res
    .status(200)
    .send("Welcome to the Customer Relationship Management System backend API");
});

// User routes
app.use("/user", userRouter);

// Enquiry routes
app.use("/enquiry", enquiryRouter);

// Start the server
app.listen(process.env.PORT, async () => {
  try {
    console.log("Server is listening on port " + process.env.PORT);
    await connection;
    console.log("Successfully connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
});
