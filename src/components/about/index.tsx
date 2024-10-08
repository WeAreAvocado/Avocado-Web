import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { IoArrowForwardOutline } from "react-icons/io5";

const About = ({ isSeparatePage }: { isSeparatePage?: boolean }) => {
  return (
    <div
      id="about"
      className={`flex flex-col items-center gap-16 w-full px-4 ${
        !isSeparatePage && "pt-36 md:pt-56"
      }`}
    >
      {!isSeparatePage && (
        <button className="rounded-full font-bold px-6 py-2 text-center md:px-10 md:py-3 text-sm md:text-lg border border-white">
          About
        </button>
      )}

      {!isSeparatePage && (
        <div className="text-2xl sm:text-5xl md:text-6xl font-bold">
          Who{" "}
          <span className="font-instrumentSerif font-normal italic ">we</span>{" "}
          are
        </div>
      )}

      <div className="w-full overflow-hidden from-[#8D9853] to-[#2E321B] rounded-2xl bg-gradient-to-br py-4 px-8 sm:py-8 sm:px-12 md:py-16 md:px-24 2xl:px-44 2xl:py-24 relative flex flex-col gap-8 sm:gap-12">
        <div className="z-[1] absolute -top-[14rem] -left-[14rem] scale-50 md:scale-100 md:-top-[14rem] md:-left-[14rem] select-none flex items-center justify-center">
          <Image
            className="object-cover h-fit w-full"
            src="/assets/vector-about.png"
            alt="About Us Background"
            width={500}
            height={500}
          />
        </div>

        <div className="z-[1] absolute -bottom-[14rem] -right-[12rem] scale-50 md:scale-100 md:-bottom-[14rem] md:-right-[10rem] select-none flex items-center justify-center">
          <Image
            className="object-cover h-fit w-full"
            src="/assets/vector-about.png"
            alt="About Us Background"
            width={500}
            height={500}
          />
        </div>

        <span className="z-10 flex items-center gap-1 text-lg font-semibold">
          <GoDotFill size={25} />
          Introduction
        </span>
        <div className="z-10 !leading-relaxed text-2xl sm:text-3xl md:text-5xl font-semibold">
          At the forefront of{" "}
          <span className="font-instrumentSerif italic font-thin">
            digital marketing
          </span>{" "}
          and{" "}
          <span className="font-instrumentSerif italic font-thin">
            software development
          </span>{" "}
          , our agency uses{" "}
          <span className="font-instrumentSerif italic font-thin">
            innovative strategies
          </span>{" "}
          to drive brand evolution, rapid growth, and long-lasting impact.
          {/* At the forefront of{" "}
          <span className="font-instrumentSerif italic font-thin">design</span>{" "}
          innovation, our agency harnesses digital{" "}
          <span className="font-instrumentSerif italic font-thin">
            creativity
          </span>{" "}
          to help brands{" "}
          <span className="font-instrumentSerif italic font-thin">
            innovate
          </span>{" "}
          rapidly and effectively. */}
        </div>
        <div className="z-10 flex w-fit gap-1 hover:flex-row-reverse hover:justify-end hover:duration-300 hover:ease-in-out hover:transition-all">
          <Link
            href="https://calendly.com/alotavocados/30min"
            target="_blank"
            className="p-3 bg-white rounded-xl text-black font-semibold text-sm md:text-lg"
          >
            Book a 15-min call
          </Link>
          <Link
            href="https://calendly.com/alotavocados/30min"
            target="_blank"
            className="p-3 px-4 bg-white rounded-xl text-black font-semibold text-lg flex items-center"
          >
            <IoArrowForwardOutline className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
