import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed w-full flex justify-center bg-red z-50 top-6">
      <div className="border border-[#AAAAAA] rounded-full py-1.5 px-6 flex items-center max-w-3xl w-7/12 justify-between m-auto overflow-hidden backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="object-cover"
            src="/assets/logo-navbar.png"
            alt="Next.js Logo"
            width={136}
            height={52}
            priority
          />
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="flex items-center gap-2">
            Projects
          </Link>
          <Link href="/" className="flex items-center gap-2">
            About
          </Link>
          <Link href="/" className="flex items-center gap-2">
            Services
          </Link>
          <Link href="/" className="flex items-center gap-2">
            Testimonials
          </Link>
          <Link href="/" className="flex items-center gap-2">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
