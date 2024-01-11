// Models/User.model.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
  // Default role is 'employee'
  role: { type: String, enum: ["employee", "counselor"], default: "employee" }
});

// User Model
const userModel = mongoose.model("user", userSchema);
module.exports = { userModel };
