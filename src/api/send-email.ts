import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// Use a free SMTP server like Ethereal for testing purposes
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.ETHEREAL_USER, // replace with your Ethereal user
    pass: process.env.ETHEREAL_PASS, // replace with your Ethereal password
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.RECIPIENT_EMAIL, // replace with your email
        subject: `New contact form submission from ${name}`,
        text: message,
        html: `<p>${message}</p>`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
