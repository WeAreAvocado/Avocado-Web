import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative bg-[#0A0A0A] w-full rounded-3xl overflow-hidden flex flex-col items-center mb-12">
      <div className="absolute w-full flex items-center justify-center select-none -top-[20rem]">
        <div className="w-[42rem] h-[30rem] flex-shrink-0 rounded-full bg-brand bg-opacity-60 filter blur-[250px]" />
      </div>

      <div className=" my-8 px-6 md:my-24 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 justify-between w-full">
        <div className="flex flex-col">
          <Image
            className="object-cover"
            src="/assets/logo/logo-small.png"
            alt="Avocado Tech Logo"
            width={157}
            height={60}
            priority
          />
          <span className="opacity-70 font-light text-md md:text-xl">
            Creative and Award winning brand &<br /> design agencies
          </span>
        </div>
        <div className="flex gap-12 md:gap-16 md:justify-end">
          <div className="flex flex-col gap-4">
            <span className="font-semibold">MAIN PAGES</span>
            <Link className="opacity-70 text-sm" href="#projects">
              Project
            </Link>
            <Link className="opacity-70 text-sm" href="#about">
              About Us
            </Link>
            <Link className="opacity-70 text-sm" href="#services">
              Services
            </Link>
            <Link className="opacity-70 text-sm" href="#testimonials">
              Testimonials
            </Link>
            <Link className="opacity-70 text-sm" href="#contact-us">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-semibold text-md">FOLLOW US</span>
            <Link className="opacity-70 text-sm" href="">
              Instagram
            </Link>
            <Link className="opacity-70 text-sm" href="">
              LinkedIn
            </Link>
            <Link className="opacity-70 text-sm" href="">
              Twitter
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-1/2 w-1/2">
        <Image
          className="mb-8"
          src="/assets/logo/logo-big.png"
          alt="Avocado Tech Logo"
          height={300}
          width={500}
        />
      </div>
    </div>
  );
};

export default Footer;
