import { HiLightningBolt } from "react-icons/hi";
import { FaFolder } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { TbLayoutCardsFilled } from "react-icons/tb";
import { PiStarFourFill } from "react-icons/pi";
import { TbCirclesRelation } from "react-icons/tb";

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center gap-16 w-full pt-56"
    >
      <button className="rounded-full font-bold px-10 py-3 text-lg border border-white ">
        Services
      </button>
      <div className="text-6xl font-bold">
        What we offer{" "}
        <span className="font-instrumentSerif font-normal italic ">offer</span>
      </div>

      <div className="flex gap-8 flex-wrap w-10/12 justify-center">
        <div className="rounded-2xl flex flex-col gap-6 py-8 px-6 border border-[#6E6E6E] bg-[#0A0A0A] bg-opacity-50 w-80 h-60 group/service">
          <HiLightningBolt className="h-12 w-12 text-white flex-shrink-0 group-hover/service:text-[#FF4830]" />
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold group-hover/service:text-[#FF4830]">
              Digital Marketing
            </span>
            <span className="w-11/12 text-[#6E6E6E] text-md">
              Engaging websites tailored for your success.
            </span>
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-6 py-8 px-6 border border-[#6E6E6E] bg-[#0A0A0A] bg-opacity-50 w-80 h-60 group/service">
          <FaFolder className="h-12 w-12 text-white flex-shrink-0 group-hover/service:text-[#FF4830]" />
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold group-hover/service:text-[#FF4830]">
              Seo Optimization.{" "}
            </span>
            <span className="w-11/12 text-[#6E6E6E] text-md">
              Targeted strategies for maximum online impact.
            </span>
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-6 py-8 px-6 border border-[#6E6E6E] bg-[#0A0A0A] bg-opacity-50 w-80 h-60 group/service">
          <FaBookOpen className="h-12 w-12 text-white flex-shrink-0 group-hover/service:text-[#FF4830]" />
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold group-hover/service:text-[#FF4830]">
              App design & Development
            </span>
            <span className="w-11/12 text-[#6E6E6E] text-md">
              Destructive brands crafted to stand out.
            </span>
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-6 py-8 px-6 border border-[#6E6E6E] bg-[#0A0A0A] bg-opacity-50 w-80 h-60 group/service">
          <TbLayoutCardsFilled className="h-12 w-12 text-white flex-shrink-0 group-hover/service:text-[#FF4830]" />
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold group-hover/service:text-[#FF4830]">
              Web design & Development
            </span>
            <span className="w-11/12 text-[#6E6E6E] text-md">
              Create custom reports and gain predictive insights for business
              growth.
            </span>
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-6 py-8 px-6 border border-[#6E6E6E] bg-[#0A0A0A] bg-opacity-50 w-80 h-60 group/service">
          <PiStarFourFill className="h-12 w-12 text-white flex-shrink-0 group-hover/service:text-[#FF4830]" />
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold group-hover/service:text-[#FF4830]">
              E - Commerce website & App
            </span>
            <span className="w-11/12 text-[#6E6E6E] text-md">
              Efficiently track leads, manage deals, and monitor sales
              activities.
            </span>
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-6 py-8 px-6 border border-[#6E6E6E] bg-[#0A0A0A] bg-opacity-50 w-80 h-60 group/service">
          <TbCirclesRelation className="h-12 w-12 text-white flex-shrink-0 group-hover/service:text-[#FF4830]" />
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold group-hover/service:text-[#FF4830]">
              CRM Integration
            </span>
            <span className="w-11/12 text-[#6E6E6E] text-md">
              Seamlessly manage customer data and interactions with integrated
              CRM.
            </span>
          </div>
        </div>
      </div>

      <div className="text-6xl font-bold mt-40">Why work with us:</div>
      <div className="w-full bg-[#121212] rounded-2xl py-28 px-36 grid grid-cols-2 gap-20">
        <div className="flex flex-col justify-center gap-4 w-full">
          <div className="h-16 w-16 rounded-2xl bg-brand mb-2" />
          <span className="text-xl font-bold">Experienced Team</span>
          <span className="text-lg font-medium text-[#6E6E6E]">
            Benefit from our seasoned team&apos;s wealth of expertise and
            industry experience.
          </span>
        </div>
        <div className="flex flex-col justify-center gap-4 w-full">
          <div className="h-16 w-16 rounded-2xl bg-brand mb-2" />
          <span className="text-xl font-bold">Customized Solution</span>
          <span className="text-lg font-medium text-[#6E6E6E]">
            Tailored design services to meet your unique branding needs and
            objectives.
          </span>
        </div>
        <div className="flex flex-col justify-center gap-4 w-full">
          <div className="h-16 w-16 rounded-2xl bg-brand mb-2" />
          <span className="text-xl font-bold">Innovative Approach</span>
          <span className="text-lg font-medium text-[#6E6E6E]">
            Cutting-edge designs crafted to set your brand apart from the
            competition.
          </span>
        </div>
        <div className="flex flex-col justify-center gap-4 w-full">
          <div className="h-16 w-16 rounded-2xl bg-brand mb-2" />
          <span className="text-xl font-bold">Efficiency & Timeliness</span>
          <span className="text-lg font-medium text-[#6E6E6E]">
            We closely collaborate with you to ensure your vision exceeds
            expectations.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
