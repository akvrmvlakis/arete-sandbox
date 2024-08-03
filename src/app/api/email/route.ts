import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST as string,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASS as string,
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: "akvrmvlakis@gmail.com",
    to: "pro_balla2000@hotmail.com",
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (err: unknown) {
    // Type assertion to `Error`
    const errorMessage = (err as Error).message || "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
