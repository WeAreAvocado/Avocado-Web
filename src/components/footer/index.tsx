import { LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "@/constants";

const Footer = () => {
  return (
    <div className="relative bg-[#0A0A0A] w-full rounded-3xl overflow-hidden flex flex-col items-center mb-12">
      <div className="absolute w-full flex items-center justify-center select-none -top-[20rem]">
        <div className="w-[42rem] h-[30rem] flex-shrink-0 rounded-full bg-brand bg-opacity-60 filter blur-[250px]" />
      </div>

      {/* <div className="text-center w-10/12 text-2xl my-6 font-semibold">
        Whether you&apos;re searching for a{" "}
        <span className="font-instrumentSerif italic font-thin">
          creative marketing agency
        </span>
        , an
        <span className="font-instrumentSerif italic font-thin">
          advertising agency near me
        </span>
        , or looking to boost results through{" "}
        <span className="font-instrumentSerif italic font-thin">
          PPC in digital marketing
        </span>
        , we&apos;ve got you covered with top-notch{" "}
        <span className="font-instrumentSerif italic font-thin">
          business consulting
        </span>
        and
        <span className="font-instrumentSerif italic font-thin">
          online marketing
        </span>{" "}
        expertise.
      </div> */}

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
          <span className="opacity-70 font-light text-md md:text-xl max-w-96">
            Whether you&apos;re searching for a{" "}
            <span className="font-semibold">creative marketing agency</span>, an{" "}
            <span className="font-semibold">advertising agency near me</span>,
            or looking to boost results through{" "}
            <span className="font-semibold">PPC in digital marketing</span>,
            we&apos;ve got you covered with top-notch{" "}
            <span className="font-semibold">business consulting</span> and{" "}
            <span className="font-semibold">online marketing</span> expertise.
          </span>
        </div>
        <div className="flex gap-12 md:gap-16 md:justify-end">
          <div className="flex flex-col gap-4">
            <span className="font-semibold">MAIN PAGES</span>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                className="opacity-70 text-sm"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-semibold text-md">FOLLOW US</span>
            <Link
              target="_blank"
              className="opacity-70 text-sm"
              href={LINKS.instagram}
            >
              Instagram
            </Link>
            <Link
              target="_blank"
              className="opacity-70 text-sm"
              href={LINKS.linkedin}
            >
              LinkedIn
            </Link>
            <Link
              target="_blank"
              className="opacity-70 text-sm"
              href={LINKS.twitter}
            >
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
