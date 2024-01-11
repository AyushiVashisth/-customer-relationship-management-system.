// Routes/Enquire.routes.js

const express = require("express");
const { enquiryModel } = require("../Models/Enquire.model");
const { authMiddleware } = require("../middlewares/authMiddleware");

const enquiryRouter = express.Router();

// Submit a new enquiry through a public form (No authentication required)
enquiryRouter.post("/publicForm", async (req, res) => {
  try {
    const { name, email, courseInterest } = req.body;
    const enquiry = new enquiryModel({ name, email, courseInterest });
    await enquiry.save();
    res.status(201).send({ message: "Enquiry submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

// Claim a lead by a logged-in user (Authentication required)
enquiryRouter.post("/claimLead/:enquiryId", authMiddleware, async (req, res) => {
  try {
    const { enquiryId } = req.params;
    const { userId } = req.user;
    const enquiry = await enquiryModel.findById(enquiryId);

    if (!enquiry) {
      return res.status(404).send({ message: "Enquiry not found" });
    }

    if (enquiry.isClaimed) {
      return res.status(400).send({ message: "Enquiry already claimed" });
    }

    enquiry.claimedBy = userId;
    enquiry.isClaimed = true;
    await enquiry.save();

    res.status(200).send({ message: "Enquiry claimed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

// Retrieve unclaimed leads (Authentication required)
enquiryRouter.get("/unclaimedLeads", authMiddleware, async (req, res) => {
  try {
    const unclaimedLeads = await enquiryModel.find({ isClaimed: false });
    res.status(200).send(unclaimedLeads);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

// Retrieve leads claimed by the logged-in user (Authentication required)
enquiryRouter.get("/myLeads", authMiddleware, async (req, res) => {
  try {
    const { userId } = req.user;
    const myLeads = await enquiryModel.find({ claimedBy: userId });
    res.status(200).send(myLeads);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = { enquiryRouter };
