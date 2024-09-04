import Image from "next/image";
import FeaturedOn from "@/components/featured-on";
import Projects from "@/components/projects";
import About from "@/components/about";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import BookACall from "@/components/book-a-call";
import ContactUs from "@/components/contact-us";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Container */}
      <div className="absolute -z-50 w-screen min-h-screen">
        {/* Background lines */}
        <div className="absolute inset-0">
          <div className="relative w-full h-[36rem] md:h-full select-none">
            <Image
              className="object-cover opacity-10"
              src="/assets/background-lines.png"
              alt="Background Lines"
              fill
            />
          </div>
        </div>
        {/* Layer Blur light effect */}
        <div className="absolute w-full flex items-center justify-center select-none -top-[25rem]">
          <div className="w-[48rem] h-[48rem] flex-shrink-0 rounded-full bg-brand bg-opacity-60 filter blur-[250px]" />
        </div>
      </div>

      <div>
        <Image
          src="/assets/hero-section/2.png"
          alt="Avocado Tech"
          width={120}
          height={120}
          className="absolute scale-50 sm:scale-75 md:scale-100 top-[3.5rem] left-14 sm:top-24 sm:left-10 md:top-32 md:left-20 hover:scale-110 duration-150 ease-in transition-all"
        />
        <div className="absolute top-[7rem] -left-[3rem] sm:top-[20rem] sm:left-16 md:top-[20rem] md:left-32 scale-50 sm:scale-75 md:scale-100">
          <Image
            src="/assets/hero-section/1.png"
            alt="Avocado Tech"
            width={120}
            height={120}
            className="animate-spin-slow h-full w-full"
          />
        </div>
        <Image
          src="/assets/hero-section/3.png"
          alt="Avocado Tech"
          width={130}
          height={130}
          className="absolute scale-50 sm:scale-75 md:scale-100 top-[4rem] -right-2 sm:top-[10rem] sm:-right-4 md:top-[14rem] md:-right-4 hover:scale-110 duration-150 ease-in transition-all"
        />
        <Image
          src="/assets/hero-section/4.png"
          alt="Avocado Tech"
          width={150}
          height={150}
          className="absolute hidden sm:scale-75 md:scale-100 sm:top-[27rem] sm:left-[1rem] md:top-[40rem] md:left-[2rem] hover:scale-110 duration-150 ease-in transition-all"
        />
        <Image
          src="/assets/hero-section/5.png"
          alt="Avocado Tech"
          width={150}
          height={150}
          className="absolute scale-50 sm:scale-75 md:scale-100 top-[22rem] -right-[4.5rem] sm:top-[28rem] sm:right-[2rem] md:top-[38rem] md:right-[12rem] hover:scale-110 duration-150 ease-in transition-all"
        />
        <Image
          src="/assets/hero-section/6.png"
          alt="Avocado Tech"
          width={120}
          height={120}
          className="absolute scale-50 sm:scale-75 md:scale-100 top-[14rem] -right-[2.5rem] sm:top-[19rem] sm:right-[8rem] md:top-[24rem] md:right-[8rem] hover:scale-110 duration-150 ease-in transition-all"
        />
        <Image
          src="/assets/hero-section/7.png"
          alt="Avocado Tech"
          width={200}
          height={200}
          className="absolute scale-50 sm:scale-75 md:scale-100 top-[23rem] -left-[6rem] sm:top-[28rem] sm:left-[14rem] md:top-[32rem] md:left-[14rem] hover:scale-110 duration-150 ease-in transition-all"
        />
      </div>

      {/* Hero Section */}
      <div className="h-[36rem] md:h-screen w-screen flex flex-col items-center pt-44 sm:pt-48 md:pt-64 2xl:pt-80 gap-24 2xl:gap-32 z-50">
        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-10 px-4">
          <div className="font-semibold text-3xl sm:text-4xl text-center md:text-6xl flex flex-col items-center justify-center">
            <span>
              Ready to{" "}
              <span className="font-instrumentSerif italic">scale</span> your
            </span>
            <span>brand with Avocado Tech?</span>
          </div>
          <div className="text-md md:text-xl max-w-lg text-center text-[#FFFFFF]/60 font-extralight">
            Empowering startups with award-winning design solutions to stand out
            in the market and thrive.
          </div>
        </div>

        <div className="flex gap-10">
          <Link
            href="#contact-us"
            className="bg-white rounded-md text-brand font-bold px-6 py-2 text-center md:px-10 md:py-3 text-sm md:text-lg border hover:border-transparent hover:outline hover:outline-4 duration-75 ease-in-out transition-all"
          >
            Contact Us
          </Link>
          <Link
            href="https://calendly.com/alotavocados/30min"
            target="_blank"
            className="rounded-md text-brand font-bold px-6 py-2 text-center md:px-10 md:py-3 text-sm md:text-lg border border-brand hover:border-transparent hover:outline hover:outline-4 duration-75 ease-in-out transition-all"
          >
            Book a call
          </Link>
        </div>
      </div>

      <video
        className="h-full w-5/6 md:w-10/12 rounded-3xl m-auto my-8"
        autoPlay
        muted
        loop
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col w-screen items-center max-w-screen-xl 2xl:max-w-screen-2xl m-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-28 justify-center items-center p-4 w-full mt-12">
          <div className="flex flex-col items-center justify-center gap-6 w-full h-52 md:w-60">
            {/* <FaUser size={45} /> */}
            <span className="flex flex-col justify-center font-semibold">
              <span className="text-[6rem]">20</span>
              <span className="text-xl text-white/70">Employees</span>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 w-full h-52 md:w-60">
            {/* <CgCoffee size={45} /> */}
            <span className="flex flex-col justify-center font-semibold">
              <span className="text-[6rem]">1750</span>
              <span className="text-xl text-white/70">Cup of Tea</span>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 w-full h-52 md:w-60">
            {/* <BsStars size={45} /> */}
            <span className="flex flex-col justify-center font-semibold">
              <span className="text-[6rem]">100+</span>
              <span className="text-xl text-white/70">Clients</span>
            </span>
          </div>
        </div>

        {/* Featured On  */}
        {/* <FeaturedOn /> */}

        {/* Projects */}
        <Projects />

        {/* About */}
        <About />

        {/* Services */}
        <Services />

        {/* Testimonials */}
        <Testimonials />

        {/* Book a Call */}
        <BookACall />

        {/* Contact Us */}
        <ContactUs />
      </div>
    </main>
  );
}
