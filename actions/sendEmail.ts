"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid Sender Email" };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid Message" };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "cartantonio2000@gmail.com",
      subject: "message from portfolio",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    if (data?.error) {
      throw new Error(getErrorMessage(data.error));
    }
  } catch (error: unknown) {
    console.log("Caught an error:", error);
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
