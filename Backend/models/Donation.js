const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Donation amount is required"],
    },
    currency: {
      type: String,
      default: "INR",
    },
    purpose: {
      type: String,
      required: [true, "Donation purpose is required"],
    },
    type: {
      type: String,
      enum: ["one-time", "monthly"],
      default: "one-time",
    },
    donorName: {
      type: String,
      required: [true, "Donor name is required"],
    },
    donorEmail: {
      type: String,
      default: "",
    },
    donorPhone: {
      type: String,
      default: "",
    },
    orderId: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
      default: "",
    },
    signature: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["created", "paid", "failed"],
      default: "created",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Donation", donationSchema);
