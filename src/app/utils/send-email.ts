import { FormData } from "@/components/Form";

// src/app/utils/send-email.ts
export async function sendEmail(data: FormData) {
  const response = await fetch("/api/email", {
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
