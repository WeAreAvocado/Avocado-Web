"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenu5Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const NavBarMobile = () => {
  // const [isNavOpen, setIsNavOpen] = useState(false);

  // const handleMenuClick = () => {
  //   setIsNavOpen(!isNavOpen);
  // };
  return (
    <Popover>
      {({ open }) => (
        <div className="w-full flex justify-center relative">
          <div className="rounded-full py-1.5 px-2 flex items-center max-w-3xl w-full justify-between m-auto overflow-hidden z-[55]">
            <Link href="/" className="flex items-center gap-2 z-[55]">
              <Image
                className="object-cover z-[55]"
                src="/assets/logo/logo-small.png"
                alt="Avocado Tech Logo"
                width={170}
                height={65}
                priority
                quality={100}
              />
            </Link>

            <div
              className="bg-brand bg-opacity-10 p-3 rounded-full flex items-center justify-center cursor-pointer"
              // onClick={handleMenuClick}
            >
              <PopoverButton>
                {open ? (
                  <IoClose className="h-6 w-6" />
                ) : (
                  <RiMenu5Fill className="h-6 w-6" />
                )}
              </PopoverButton>
            </div>
          </div>

          <PopoverPanel
            anchor={{ to: 'bottom start', gap: '2rem' }}
            className="flex flex-col gap-4 bg-brand w-[10rem] p-4 rounded-xl mr-4"
          >
            <Link
              href="#projects"
              className="flex items-center gap-2 text-[#323715] text-lg font-medium"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-2 text-[#323715] text-lg font-medium"
            >
              About
            </Link>
            <Link
              href="#services"
              className="flex items-center gap-2 text-[#323715] text-lg font-medium"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="flex items-center gap-2 text-[#323715] text-lg font-medium"
            >
              Testimonials
            </Link>
            <Link
              href="#contact-us"
              className="flex items-center gap-2 text-[#323715] text-lg font-medium"
            >
              Contact
            </Link>
          </PopoverPanel>

          {/* {isNavOpen && (
        <div className="absolute flex flex-col justify-center items-center z-[51] h-[72rem] w-[72rem] bg-brand rounded-full top-2/3 xs:top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 xs:-translate-y-1/2">
        <div className="flex-1"/>
        <nav className="flex flex-col gap-6 justify-center items-center h-full">
        <Link
        href="#projects"
        className="flex items-center gap-2 text-white text-xl"
            >
              Projects
              </Link>
              <Link
              href="#about"
              className="flex items-center gap-2 text-white text-xl"
              >
              About
              </Link>
              <Link
              href="#services"
              className="flex items-center gap-2 text-white text-xl"
              >
              Services
              </Link>
              <Link
              href="#testimonials"
              className="flex items-center gap-2 text-white text-xl"
              >
              Testimonials
              </Link>
              <Link
              href="#contact-us"
              className="flex items-center gap-2 text-white text-xl"
              >
              Contact
              </Link>
              </nav>
              </div>
              )} */}
        </div>
      )}
    </Popover>
  );
};

export default NavBarMobile;
