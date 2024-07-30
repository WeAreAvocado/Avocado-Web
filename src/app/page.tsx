import Image from "next/image";
import FeaturedOn from "./@featured-on";
import Projects from "./@projects";
import About from "./@about";
import Services from "./@services";
import Testimonials from "./@testimonials";
import ContactUs from "./@contact-us";
import Footer from "./@footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Background Container */}
      <div className="absolute -z-50 w-screen min-h-screen">
        {/* Background lines */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full select-none">
            <Image
              className="object-cover opacity-10"
              src="/assets/background-lines.png"
              alt="Next.js Logo"
              fill
            />
          </div>
        </div>
        {/* Layer Blur light effect */}
        <div className="absolute w-full flex items-center justify-center select-none -top-[25rem]">
          <div className="w-[51rem] h-[51rem] flex-shrink-0 rounded-full bg-brand bg-opacity-60 filter blur-[250px]" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen w-screen flex flex-col items-center pt-72 2xl:pt-80 gap-24 2xl:gap-32 z-50">
        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-10">
          <div className="font-semibold text-6xl flex flex-col items-center justify-center">
            <span>
              Ready to{" "}
              <span className="font-instrumentSerif italic">scale</span> your
            </span>
            <span>brand with Avocado Tech?</span>
          </div>
          <div className="text-xl max-w-lg text-center text-[#FFFFFF]/60 font-extralight">
            Empowering startups with award-winning design solutions to stand out
            in the market and thrive.
          </div>
        </div>

        <div className="flex gap-10">
          <button className="bg-white rounded-md text-brand font-bold px-10 py-3 text-lg border hover:border-transparent hover:outline hover:outline-4 duration-75 ease-in-out transition-all">
            Contact Us
          </button>
          <button className="rounded-md text-brand font-bold px-10 py-3 text-lg border border-brand hover:border-transparent hover:outline hover:outline-4 duration-75 ease-in-out transition-all">
            Book a call
          </button>
        </div>
      </div>

      <div className="flex flex-col w-screen items-center max-w-screen-xl 2xl:max-w-screen-2xl m-auto">
        {/* Featured On  */}
        <FeaturedOn />

        {/* Projects */}
        <Projects />

        {/* About */}
        <About />

        {/* Services */}
        <Services />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Us */}
        <ContactUs />

        {/* Footer */}
        <Footer />
      </div>

      <div className="h-96" />
    </main>
  );
}
