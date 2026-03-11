const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const Razorpay = require("razorpay");
const Donation = require("../models/Donation");

// Initialize Razorpay instance
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// POST /api/donations/create-order - Create a Razorpay order
router.post("/create-order", async (req, res) => {
  try {
    const { amount, purpose, type, donorName, donorEmail, donorPhone } = req.body;

    // Validate required fields
    if (!amount || !purpose || !donorName) {
      return res.status(400).json({
        success: false,
        message: "Amount, purpose, and donor name are required",
      });
    }

    if (amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Amount must be greater than 0",
      });
    }

    // Create Razorpay order (amount in paise)
    const options = {
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `donation_${Date.now()}`,
      notes: {
        purpose,
        type: type || "one-time",
        donorName,
        donorEmail: donorEmail || "",
        donorPhone: donorPhone || "",
      },
    };

    const order = await razorpayInstance.orders.create(options);

    // Save initial donation record
    const donation = await Donation.create({
      amount,
      currency: "INR",
      purpose,
      type: type || "one-time",
      donorName,
      donorEmail: donorEmail || "",
      donorPhone: donorPhone || "",
      orderId: order.id,
      status: "created",
    });

    return res.status(200).json({
      success: true,
      order,
      donation: donation._id,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Create order error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create donation order. Please try again.",
    });
  }
});

// POST /api/donations/verify - Verify Razorpay payment
router.post("/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Validate required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Missing payment verification details",
      });
    }

    // Verify the payment signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Update donation record as paid
      const donation = await Donation.findOneAndUpdate(
        { orderId: razorpay_order_id },
        {
          paymentId: razorpay_payment_id,
          signature: razorpay_signature,
          status: "paid",
        },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "Payment verified successfully. Thank you for your donation!",
        donation,
      });
    } else {
      // Update donation record as failed
      await Donation.findOneAndUpdate(
        { orderId: razorpay_order_id },
        { status: "failed" }
      );

      return res.status(400).json({
        success: false,
        message: "Payment verification failed. Please contact support.",
      });
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    return res.status(500).json({
      success: false,
      message: "Payment verification failed. Please try again.",
    });
  }
});

module.exports = router;
