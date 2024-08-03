"use server";

import sendGrid from "@sendgrid/mail";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  mobile: z.string().min(10).max(10),
  message: z.string().min(1),
});

export const sendMail = async (prevState: any, formData: FormData) => {
  "use server";
  const { name, email, mobile, message } = Object.fromEntries(formData);

  const parsedData = schema.safeParse({ name, email, mobile, message });

  if (parsedData.error) {
    return {
      message: "Invalid data",
      success: false,
    };
  }

  try {
    sendGrid.setApiKey(process.env.SENDGRID_API_KEY as string);

    await sendGrid.send({
      to: "work@avocadotech.in",
      from: "work@avocadotech.in",
      subject: "Contact Form Submission - Avocado Tech",
      text: `${name}\n\n${email}\n\n${mobile}\n\n${message}`,
      html: `<p>${name}</p><p>${email}</p><p>${mobile}</p><p>${message}</p>`,
    });

    return {
      message: "Message sent successfully",
      success: true,
    };
  } catch (error) {
    return {
      message: "Something went wrong",
      success: false,
    };
  }
};
