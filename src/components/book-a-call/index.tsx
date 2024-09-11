import Image from "next/image";
import Link from "next/link";

const BookACall = () => {
  return (
    <div className="2xl:w-3/4 w-11/12 h-[26rem] sm:h-[24rem] md:h-[40rem] relative rounded-3xl overflow-hidden mt-36 md:mt-56 flex flex-col items-center justify-center">
      <Image
        className="object-cover rounded-3xl -z-10"
        src="/assets/book-a-call.png"
        alt="Book a call"
        fill
      />
      <div className="w-full md:w-auto max-w-3xl px-4 py-2 rounded-md flex flex-col gap-8 md:gap-16 items-center">
        <div className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center">
          Ready to elevate your brand with expert{" "}
          <span className="font-instrumentSerif italic">digital marketing</span>{" "}
          solutions?
        </div>
        <span className="text-center text-sm sm:text-lg font-semibold">
          As a creative and award-winning application development company in
          India and a leading digital marketing agency, we specialize in helping
          businesses thrive.
        </span>
        <Link
          href="https://calendly.com/alotavocados/30min"
          target="_blank"
          className="bg-white w-fit rounded-md text-brand font-bold px-6 py-2 text-center md:px-10 md:py-3 text-sm md:text-lg border hover:border-transparent hover:outline hover:outline-4 duration-75 ease-in-out transition-all"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};

export default BookACall;
