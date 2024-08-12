// utils/send-email.ts

import { FormData } from "@/components/Form";

export async function sendEmail(data: FormData) {
  const response = await fetch("https://arete-sandbox.vercel.app/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }
}
