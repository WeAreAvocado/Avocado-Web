import Image from "next/image";
import Link from "next/link";

const BookACall = () => {
  return (
    <div className="2xl:w-3/4 w-11/12 h-[40rem] relative rounded-3xl overflow-hidden mt-56">
      <Image
        className="object-cover rounded-3xl"
        src="/assets/book-a-call.png"
        alt="Book a call"
        fill
      />
      <div className="absolute px-4 py-2 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-16 items-center">
        <div className="font-semibold text-6xl ">
          Ready to scale your brand to{" "}
          <span className="font-instrumentSerif italic">new heights?</span>
        </div>
        <span className="text-center text-lg font-semibold">
          If you want to achieve ground-breaking growth with increased sales and
          profitability with paid ads, then you&apos;re in the right place.
        </span>
        <Link
          href="#contact-us"
          className="bg-white w-fit rounded-md text-brand font-bold px-10 py-3 text-lg border hover:border-transparent hover:outline hover:outline-4 duration-75 ease-in-out transition-all"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};

export default BookACall;
