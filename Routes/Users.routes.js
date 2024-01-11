// Routes/Users.routes.js
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { userModel } = require("../Models/User.model");

const userRouter = express.Router();

// User registration endpoint
userRouter.post("/register", async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    // Check if email already exists
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(409).send({ message: "Email already exists, please login instead." });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = new userModel({ fullName, email, password: hashedPassword, role });
    await user.save();

    res.status(201).send({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      msg: "Something went wrong, please try again",
      error: err.message
    });
  }
});

// User login endpoint
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const expiresIn = "2h";

    // Find the user by email
    const user = await userModel.findOne({ email: email });

    // Check if user exists
    if (!user) {
      return res.status(404).send({ message: "User not found. Please register yourself first." });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Authentication Failed. Credentials don't match." });
    }

    // Generate JWT token for successful login
    const token = jwt.sign(
      { userId: user._id, fullName: user.fullName },
      process.env.JWT_SECRET_KEY,
      { expiresIn }
    );

    res.status(200).send({ message: "Login successful", token: token, user: user.fullName });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = { userRouter };
