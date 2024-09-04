"use client";

import Image from "next/image";
import Link from "next/link";
import { RiMenu5Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { NAV_LINKS } from "@/constants";

const NavBarMobile = () => {
  return (
    <Popover>
      {({ open }) => (
        <div className="w-full flex justify-center relative bg-transparent">
          <div className="absolute rounded-full py-1.5 px-2 flex items-center max-w-3xl w-full bg-transparent justify-between m-auto overflow-hidden z-[55]">
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

            <div className="bg-brand bg-opacity-10 p-3 rounded-full flex items-center justify-center cursor-pointer">
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
            anchor={{ to: "bottom start", gap: "2rem" }}
            className="flex flex-col gap-2 bg-brand w-[10rem] py-4 px-2 rounded-xl mr-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-[#323715] text-lg font-medium rounded-lg hover:bg-white/10 px-3 py-1"
              >
                {link.name}
              </Link>
            ))}
          </PopoverPanel>
        </div>
      )}
    </Popover>
  );
};

export default NavBarMobile;
