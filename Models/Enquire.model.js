// Models/Enquire.model.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Enquiry Schema
const enquirySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  courseInterest: { type: String, required: true },
  claimedBy: { type: Schema.Types.ObjectId, ref: "user" }, 
  isClaimed: { type: Boolean, default: false }
});

// Enquiry Model
const enquiryModel = mongoose.model("enquiry", enquirySchema);
module.exports = { enquiryModel };
