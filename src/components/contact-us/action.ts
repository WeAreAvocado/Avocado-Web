"use server";

import sgMail from "@sendgrid/mail";
import { z } from "zod";

const formDataSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Invalid Email",
    })
    .min(1, { message: "Email is required" })
    .email("Invalid Email"),
  name: z
    .string({
      invalid_type_error: "Invalid Name",
    })
    .min(1, { message: "Name is required" }),
  mobile: z
    .string({
      invalid_type_error: "Invalid Mobile",
    })
    .min(10, { message: "Mobile is required" })
    .max(15, { message: "Mobile is required" }),
  message: z
    .string({
      invalid_type_error: "Invalid Message",
    })
    .min(1, { message: "Message is required" }),
});

export const sendMail = async (prevState: any, formData: FormData) => {
  "use server";
  const { name, email, mobile, message } = Object.fromEntries(formData);

  const parsedData = formDataSchema.safeParse({ name, email, mobile, message });

  if (parsedData.error) {
    return {
      message: "Invalid data",
      success: false,
    };
  }

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const data = {
      from: `Avocado Tech <avocado@krishnaaa.com>`,
      to: "alotavocados@gmail.com",
      subject: `🚀 New Message from ${name} | Avocado Tech`,
      html: `
          <p>Name:         ${name}</p>
          <p>Email:        ${email}</p>
          <p>Mobile:       ${mobile}</p>
          <p>Message:      ${message}</p>
      `,
    };

    const mailRes = await sgMail.send(data);

    const success = mailRes[0].statusCode === 202;

    if (success) {
      return {
        message: "Message sent successfully",
        success: true,
      };
    } else {
      return {
        message: "Error sending email",
        success: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Something went wrong",
      success: false,
    };
  }
};
