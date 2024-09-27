"use server";

import { Resend } from 'resend';
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

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendMail = async (prevState: any, formData: FormData) => {
  const { name, email, mobile, message } = Object.fromEntries(formData);

  const parsedData = formDataSchema.safeParse({ name, email, mobile, message });

  if (parsedData.error) {
    return {
      message: "Invalid data",
      success: false,
    };
  }

  try {


    const { data, error } = await resend.emails.send({
      from: 'Avocado Tech <avocado@krishnaaa.com>',
      to: ['alotavocados@gmail.com'],
      subject: `🚀 New Message from ${name} | Avocado Tech`,
      html: `
          <p>Name:         ${name}</p>
          <p>Email:        ${email}</p>
          <p>Mobile:       ${mobile}</p>
          <p>Message:      ${message}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return {
      message: "Something went wrong",
      success: false,
    };
  }
};
