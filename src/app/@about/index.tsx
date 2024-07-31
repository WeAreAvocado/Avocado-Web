import { GoDotFill } from "react-icons/go";
import { IoArrowForwardOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-16 w-full">
      <button className="rounded-full font-bold px-10 py-3 text-lg border border-white ">
        About
      </button>
      <div className="text-6xl font-bold">
        Who <span className="font-instrumentSerif font-normal italic ">we</span>{" "}
        are
      </div>

      <div className="w-full from-[#8D9853] to-[#2E321B] rounded-2xl bg-gradient-to-br py-16 px-24 relative flex flex-col gap-12">
        <span className="flex items-center gap-1 text-lg font-semibold">
          <GoDotFill size={25} />
          Introduction
        </span>
        <div className="text-5xl leading-relaxed font-semibold">
          At the forefront of{" "}
          <span className="font-instrumentSerif italic">design</span>{" "}
          innovation, our agency harnesses digital{" "}
          <span className="font-instrumentSerif italic">creativity</span> to
          help brands{" "}
          <span className="font-instrumentSerif italic">innovate</span> rapidly
          and effectively.
        </div>
        <div className="flex gap-1 hover:flex-row-reverse hover:justify-end duration-300 ease-in-out transition-all">
          <button className="p-3 bg-white rounded-xl text-black font-semibold text-lg">
            Book a 15-min call
          </button>
          <button className="p-3 px-4 bg-white rounded-xl text-black font-semibold text-lg">
            <IoArrowForwardOutline className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
