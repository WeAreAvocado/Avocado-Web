import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/constants";
import styles from "@/components/services/service.module.css"

const Services = ({ isSeparatePage }: { isSeparatePage?: boolean }) => {
  return (
    <div
      id="services"
      className="flex flex-col items-center gap-16 w-full pt-36 md:pt-56 px-4 relative"
    >
      <div className="z-[-1] absolute select-none flex flex-shrink-0 items-center justify-center w-full md:w-9/12 top-[22rem] scale-150 md:scale-100 md:top-[27rem]">
        <Image
          className="object-cover h-fit w-full"
          src="/assets/services/bg.png"
          alt="Services Background"
          width={1200}
          height={1200}
        />
      </div>

      <div className="z-[-1] absolute select-none flex flex-shrink-0 items-center justify-center w-full md:w-9/12 top-[22rem] scale-150 md:scale-100 md:top-[27rem]">
        <div className="w-[40rem] h-[40rem] flex-shrink-0 rounded-full bg-brand bg-opacity-60 filter blur-[250px]" />
      </div>

      {!isSeparatePage && (
        <button className="rounded-full font-bold px-6 py-2 text-center md:px-10 md:py-3 text-sm md:text-lg border border-white">
          Services
        </button>
      )}
      <div className="text-2xl sm:text-5xl md:text-6xl font-bold">
        What we offer{" "}
        <span className="font-instrumentSerif font-normal italic ">offer</span>
      </div>

      <div className="gap-8 grid md:grid-cols-2 xl:grid-cols-3 w-10/12 m-auto px-4 justify-center">
        {SERVICES.map((service, index) => (
          <Link key={index} href={`/services/${service.slug}`}>
            <div className={`rounded-2xl flex flex-col gap-6 py-8 px-6 border border-[#6E6E6E] bg-[#0A0A0A] bg-opacity-50 w-80 h-60 group/service m-auto ${styles.element}`}>
              <service.icon className="h-12 w-12 text-white flex-shrink-0 group-hover/service:text-[#FF4830]" />
              <div className="flex flex-col gap-4">
                <span className="text-xl font-bold group-hover/service:text-[#2a2a2a]">
                  {service.name}
                </span>
                <span className="w-11/12 text-white text-md">
                  {service.description}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {!isSeparatePage && (
        <div className="text-2xl sm:text-5xl md:text-6xl font-bold mt-40">
          Why work with us:
        </div>
      )}
      {!isSeparatePage && (
        <div className="w-full bg-[#121212] rounded-2xl py-8 px-12 sm:py-16 sm:px-24 lg:py-28 lg:px-36 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
          <div className="flex flex-col justify-center gap-4 w-full">
            <div className="flex justify-center items-center h-16 w-16 rounded-2xl bg-brand mb-2">
              <Image
                src="/assets/services/1.png"
                alt="Logo"
                height={40}
                width={30}
              />
            </div>
            <span className="text-xl font-bold">Experienced Team</span>
            <span className="text-md sm:text-lg font-medium text-[#6E6E6E]">
              Benefit from our seasoned team&apos;s wealth of expertise and
              industry experience.
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 w-full">
            <div className="flex justify-center items-center h-16 w-16 rounded-2xl bg-brand mb-2">
              <Image
                src="/assets/services/2.png"
                alt="Logo"
                height={40}
                width={30}
              />
            </div>
            <span className="text-xl font-bold">Customized Solution</span>
            <span className="text-md sm:text-lg font-medium text-[#6E6E6E]">
              Tailored design services to meet your unique branding needs and
              objectives.
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 w-full">
            <div className="flex justify-center items-center h-16 w-16 rounded-2xl bg-brand mb-2">
              <Image
                src="/assets/services/3.png"
                alt="Logo"
                height={40}
                width={30}
              />
            </div>
            <span className="text-xl font-bold">Innovative Approach</span>
            <span className="text-md sm:text-lg font-medium text-[#6E6E6E]">
              Cutting-edge designs crafted to set your brand apart from the
              competition.
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 w-full">
            <div className="flex justify-center items-center h-16 w-16 rounded-2xl bg-brand mb-2">
              <Image
                src="/assets/services/4.png"
                alt="Logo"
                height={40}
                width={30}
              />
            </div>
            <span className="text-xl font-bold">Efficiency & Timeliness</span>
            <span className="text-md sm:text-lg font-medium text-[#6E6E6E]">
              We closely collaborate with you to ensure your vision exceeds
              expectations.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
