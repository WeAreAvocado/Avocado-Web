import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed w-full hidden sm:flex justify-center z-50 top-6">
      <div className="border border-[#AAAAAA] rounded-full py-1.5 px-6 flex items-center max-w-3xl sm:w-11/12 md:w-9/12 lg:w-7/12 justify-between m-auto overflow-hidden backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="object-cover"
            src="/assets/logo/logo-small.png"
            alt="Avocado Tech Logo"
            width={136}
            height={52}
            priority
          />
        </Link>
        <nav className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-neutral-100"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
