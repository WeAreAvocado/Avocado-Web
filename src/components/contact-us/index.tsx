"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { sendMail } from "./action";
import { useFormState } from "react-dom";
import { IInitialState } from "./types";
import { useRef } from "react";
import { LINKS } from "@/constants";

const initialState: IInitialState = {
  message: "",
  success: false,
};

const ContactUs = () => {
  const [state, formAction] = useFormState(sendMail, initialState);
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div
      id="contact-us"
      className="flex flex-col items-center gap-16 w-full pt-36 md:pt-56 px-4"
    >
      <button className="rounded-full font-bold px-6 py-2 text-center md:px-10 md:py-3 text-sm md:text-lg border border-white">
        Contact Us
      </button>

      <span className="text-2xl sm:text-5xl md:text-6xl font-bold">
        Reach out to{" "}
        <span className="font-instrumentSerif font-normal italic ">us</span>
      </span>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-3xl md:border md:border-[#6E6E6E] md:p-12">
        <div className="flex flex-col flex-1 divide-[#6E6E6E] gap-7 border border-[#6E6E6E] md:border-none p-6 md:p-0 rounded-3xl">
          <span className="text-2xl font-bold text-brand">Get in touch</span>
          <hr className="w-full md:w-5/6" />
          <div className="flex flex-col gap-4 top-6">
            <div className="flex flex-col">
              <span className="text-base text-[#B8B8B8]">Email:</span>
              <Link
                href="mailto:alotavocados@gmail.com"
                className="font-semibold text-xl"
              >
                alotavocados@gmail.com
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
          <hr className="w-full md:w-5/6" />
          <div className="flex flex-col gap-2">
            <span className="text-base text-[#B8B8B8]">Follow us:</span>
            <span className="flex gap-4">
              <Link target="_blank" href={LINKS.instagram}>
                <FaInstagram size={21} />
              </Link>
              <Link target="_blank" href={LINKS.linkedin}>
                <FaLinkedinIn size={21} />
              </Link>
              <Link target="_blank" href={LINKS.twitter}>
                <FaXTwitter size={21} />
              </Link>
            </span>
          </div>
        </div>

        <form
          action={async (formData) => {
            formAction(formData);
            ref.current?.reset();
          }}
          ref={ref}
          className="grid grid-cols-2 flex-1 gap-8"
        >
          <div className="flex flex-1 flex-col gap-2 col-span-2 md:col-span-1">
            <span className="text-base text-white font-semibold">Name</span>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="text-[#8F8E8E] bg-transparent border border-[#6E6E6E] border-opacity-60 rounded-md p-2 outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 col-span-2 md:col-span-1">
            <span className="text-base text-white font-semibold">Email</span>
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              className="text-[#8F8E8E] bg-transparent border border-[#6E6E6E] border-opacity-60 rounded-md p-2 outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 col-span-2 md:col-span-1">
            <span className="text-base text-white font-semibold">Mobile</span>
            <input
              type="tel"
              placeholder="Your Mobile Number"
              name="mobile"
              className="text-[#8F8E8E] bg-transparent border border-[#6E6E6E] border-opacity-60 rounded-md p-2 outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 mt-4 relative col-span-2">
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
          <div className="h-6 col-span-2 text-sm flex items-center">
            {state?.success ? (
              <span className="text-green-500">{state?.message}</span>
            ) : (
              <span className="text-red-500">{state?.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="text-white col-span-2 w-full rounded-md !bg-brand font-bold px-10 py-3 text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
