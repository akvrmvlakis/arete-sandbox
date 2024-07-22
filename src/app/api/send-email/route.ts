import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, acceptTerms } = await req.json();

    if (!acceptTerms) {
      return NextResponse.json(
        { error: "You must accept the terms." },
        { status: 400 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST,
      port: parseInt(process.env.BREVO_SMTP_PORT || "587", 10),
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: process.env.BREVO_SMTP_USER,
      to: "pro_balla2000@hotmail.com", // replace with your destination email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in send-email route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
