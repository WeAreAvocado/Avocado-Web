import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative bg-[#0A0A0A] w-full rounded-3xl overflow-hidden flex flex-col items-center gap-12 mb-12">
      <div className="absolute w-full flex items-center justify-center select-none -top-[20rem]">
        <div className="w-[42rem] h-[30rem] flex-shrink-0 rounded-full bg-brand bg-opacity-60 filter blur-[250px]" />
      </div>

      <div className="my-24 px-16 flex justify-between w-full">
        <div className="flex flex-col">
          <Image
            className="object-cover"
            src="/assets/logo/logo-small.png"
            alt="Avocado Tech Logo"
            width={157}
            height={60}
            priority
          />
          <span className="opacity-70 font-light text-xl">
            Creative and Award winning brand &<br /> design agencies
          </span>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <span className="font-semibold">MAIN PAGES</span>
            <Link className="opacity-70" href="">
              Project
            </Link>
            <Link className="opacity-70" href="">
              About Us
            </Link>
            <Link className="opacity-70" href="">
              Services
            </Link>
            <Link className="opacity-70" href="">
              Testimonials
            </Link>
            <Link className="opacity-70" href="">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-semibold">FOLLOW US</span>
            <Link className="opacity-70" href="">
              Instagram
            </Link>
            <Link className="opacity-70" href="">
              LinkedIn
            </Link>
            <Link className="opacity-70" href="">
              Twitter
            </Link>
          </div>
        </div>
      </div>

      <div className="relative w-8/12 h-64 my-8">
        <Image
          className="object-cover"
          src="/assets/logo/logo-big.png"
          alt="Avocado Tech Logo"
          fill
        />
      </div>
    </div>
  );
};

export default Footer;
