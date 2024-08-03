"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useFormStatus } from "react-dom";
import { sendMail } from "./action";
import { useFormState } from "react-dom";
import { IInitialState } from "./types";
import { useEffect } from "react";
import { toast } from "sonner";

const initialState: IInitialState = {
  message: "",
  success: false,
};

const ContactUs = () => {
  const [state, formAction] = useFormState(sendMail, initialState);

  return (
    <div
      id="contact-us"
      className="flex flex-col items-center gap-16 w-full pt-56"
    >
      <button className="rounded-full font-bold px-10 py-3 text-lg border border-white ">
        Contact Us
      </button>

      <span className="text-6xl font-bold">
        Reach out to{" "}
        <span className="font-instrumentSerif font-normal italic ">us</span>
      </span>

      <div className="w-full flex rounded-3xl border border-[#6E6E6E] p-12">
        <div className="flex flex-col flex-1 divide-[#6E6E6E] gap-7">
          <span className="text-2xl font-bold text-brand">Get in touch</span>
          <hr className="w-5/6" />
          <div className="flex flex-col gap-4 top-6">
            <div className="flex flex-col">
              <span className="text-base text-[#B8B8B8]">Email:</span>
              <Link
                href="mailto:work@avocadotech.in"
                className="font-semibold text-xl"
              >
                work@avocadotech.in
              </Link>
            </div>
            <div className="flex flex-col">
              <span className="text-base text-[#B8B8B8]">Phone:</span>
              <Link href="tel:+91969988831" className="font-semibold text-xl">
                +91 969988831
              </Link>
            </div>
            <div className="flex flex-col">
              <span className="text-base text-[#B8B8B8]">Address:</span>
              <span className="font-semibold text-xl max-w-52">
                Anjurphata bhiwandi, Maharashtra,421305 India.
              </span>
            </div>
          </div>
          <hr className="w-5/6" />
          <div className="flex flex-col gap-2">
            <span className="text-base text-[#B8B8B8]">Follow us:</span>
            <span className="flex gap-4">
              <Link href="https://www.instagram.com/avocadotech.in">
                <FaInstagram size={21} />
              </Link>
              <Link href="https://www.linkedin.com/company/avocado-tech-services-pvt/">
                <FaLinkedinIn size={21} />
              </Link>
              <Link href="https://x.com/alotavocados">
                <FaXTwitter size={21} />
              </Link>
            </span>
          </div>
        </div>

        <form action={formAction} className="flex flex-col flex-1 gap-2">
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <span className="text-base text-white font-semibold">Name</span>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="text-[#8F8E8E] bg-transparent border border-[#6E6E6E] border-opacity-60 rounded-md p-2 outline-none focus:border-brand"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <span className="text-base text-white font-semibold">Email</span>
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                className="text-[#8F8E8E] bg-transparent border border-[#6E6E6E] border-opacity-60 rounded-md p-2 outline-none focus:border-brand"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex flex-1 flex-col gap-2">
              <span className="text-base text-white font-semibold">Mobile</span>
              <input
                type="tel"
                placeholder="Your Mobile Number"
                name="mobile"
                className="text-[#8F8E8E] bg-transparent border border-[#6E6E6E] border-opacity-60 rounded-md p-2 outline-none focus:border-brand"
              />
            </div>
            <div className="flex-1" />
          </div>
          <div className="flex flex-1 flex-col gap-2 mt-4 relative">
            <span className="text-base text-white font-semibold">Message</span>
            <textarea
              rows={6}
              placeholder="Your Message"
              name="message"
              className="bg-transparent text-[#8F8E8E] resize-none border border-[#6E6E6E] border-opacity-60 rounded-md p-2 outline-none focus:border-brand"
            />
            <Image
              className="object-cover select-none absolute opacity-20 top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/assets/logo/logo-small.png"
              alt="Avocado Tech Logo"
              width={157}
              height={60}
              priority
            />
          </div>
          <div className="h-6 text-sm flex items-center">
            {state?.success ? (
              <span className="text-green-500">{state?.message}</span>
            ) : (
              <span className="text-red-500">{state?.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="text-white w-full rounded-md !bg-brand font-bold px-10 py-3 text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
