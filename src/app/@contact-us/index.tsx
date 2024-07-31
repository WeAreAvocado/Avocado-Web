import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <button className="rounded-full font-bold px-10 py-3 text-lg border border-white ">
        Contact Us
      </button>

      <span className="text-6xl font-bold">
        Reach out to{" "}
        <span className="font-instrumentSerif font-normal italic ">us</span>
      </span>

      <div className="w-full flex rounded-3xl border border-[#6E6E6E] p-12">
        <div className="flex flex-col flex-1 divide-[#6E6E6E] gap-7">
          <span className="text-2xl font-bold text-brand">Get in touch</span>
          <hr className="w-5/6" />
          <div className="flex flex-col gap-4 top-6">
            <div className="flex flex-col">
              <span className="text-base text-[#B8B8B8]">Email:</span>
              <span className="font-semibold text-xl">info@avocado.com</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base text-[#B8B8B8]">Phone:</span>
              <span className="font-semibold text-xl">(123) 456 7890</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base text-[#B8B8B8]">Address:</span>
              <span className="font-semibold text-xl max-w-48">
                Street Address Your City, State, Zip Code Country
              </span>
            </div>
          </div>
          <hr className="w-5/6" />
          <div className="flex flex-col gap-2">
            <span className="text-base text-[#B8B8B8]">Follow us:</span>
            <span className="flex gap-4">
              <FaInstagram size={21} />
              <FaLinkedinIn size={21} />
              <FaXTwitter size={21} />
            </span>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-8">
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <span className="text-base text-white font-semibold">Name</span>
              <input
                type="text"
                className="text-[#8F8E8E] bg-transparent border border-[#6E6E6E] border-opacity-60 rounded-md p-2 outline-none focus:border-brand"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <span className="text-base text-white font-semibold">Email</span>
              <input
                type="text"
                className="text-[#8F8E8E] bg-transparent border border-[#6E6E6E] border-opacity-60 rounded-md p-2 outline-none focus:border-brand"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <span className="text-base text-white font-semibold">Mobile</span>
              <input
                type="text"
                className="text-[#8F8E8E] bg-transparent border border-[#6E6E6E] border-opacity-60 rounded-md p-2 outline-none focus:border-brand"
              />
            </div>
            <div className="flex-1" />
          </div>
          <div className="flex flex-1 flex-col gap-2 relative">
            <span className="text-base text-white font-semibold">Message</span>
            <textarea
              rows={6}
              className="bg-transparent text-[#8F8E8E] resize-none border border-[#6E6E6E] border-opacity-60 rounded-md p-2 outline-none focus:border-brand"
            />
            <Image
              className="object-cover select-none absolute opacity-20 top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/assets/logo/logo-small.png"
              alt="Avocado Tech Logo"
              width={157}
              height={60}
              priority
            />
          </div>
          <button className="text-white rounded-md bg-brand font-bold px-10 py-3 text-lg">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
