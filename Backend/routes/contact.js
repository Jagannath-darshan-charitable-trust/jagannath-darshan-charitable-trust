const express = require("express");
const router = express.Router();
const { Resend } = require("resend");
const ContactMessage = require("../models/ContactMessage");

const resend = new Resend(process.env.RESEND_API_KEY);

// POST /api/contact - Submit a contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required: name, email, subject, message",
      });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // Save to MongoDB
    const contactMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    // Send email notification via Resend
    try {
      await resend.emails.send({
        from: "Jagannath Darshan Trust <onboarding@resend.dev>",
        to: "jagannathdarshantrust.hq@gmail.com",
        subject: `New Contact Form: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2d5016; border-bottom: 2px solid #d4a517; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #555; width: 120px;">Name:</td>
                <td style="padding: 10px; color: #333;">${name}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 10px; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px; color: #333;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #555;">Subject:</td>
                <td style="padding: 10px; color: #333;">${subject}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
                <td style="padding: 10px; color: #333; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
            <hr style="margin-top: 20px; border: none; border-top: 1px solid #eee;" />
            <p style="font-size: 12px; color: #999; margin-top: 10px;">
              This email was sent from the Jagannath Darshan Charitable Trust website contact form.
            </p>
          </div>
        `,
      });
      console.log("Contact form email sent successfully");
    } catch (emailError) {
      console.error("Failed to send contact email:", emailError);
      // Don't fail the request if email fails - the message is saved in DB
    }

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully! We will get back to you soon.",
      data: contactMessage,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
});

module.exports = router;
