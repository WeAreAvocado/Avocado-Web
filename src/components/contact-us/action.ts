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

const resend = new Resend("re_PvjRpMAs_28Cn4LsjVgD93NZkoTob3oQm");


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
      from: 'Avocado Tech <avocadotech.in>',
      to: ['alotavocados@gmail.com'],
      subject: `🚀 New Message from ${name} | Avocado Tech`,
      html: `
          <p>Name:         ${name}</p>
          <p>Email:        ${email}</p>
          <p>Mobile:       ${mobile}</p>
          <p>Message:      ${message}</p>
      `,
    });
    
   



    const success = true;

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
