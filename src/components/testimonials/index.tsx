import { Marquee } from "@devnomic/marquee";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mollie Morris",
      designation: "CEO of Company 1",
      image: "https://picsum.photos/seed/picsum/200/200",
      message:
        "Integration with our existing tools was seamless. Scalable fits perfectly into our workflow.",
    },
    {
      name: "Alex Jomiah",
      designation: "CEO of Company 2",
      image: "https://picsum.photos/seed/picsum/200/200",
      message:
        "Integration with our existing tools was seamless. Scalable fits perfectly into our workflow.",
    },
    {
      name: "Belinda Meyers",
      designation: "CEO of Company 3",
      image: "https://picsum.photos/seed/picsum/200/200",
      message:
        "Integration with our existing tools was seamless. Scalable fits perfectly into our workflow.",
    },
  ];

  return (
    <div
      id="testimonials"
      className="flex flex-col items-center gap-16 w-full pt-56"
    >
      <button className="rounded-full font-bold px-10 py-3 text-lg border border-white ">
        Testimonials
      </button>
      <div className="text-6xl font-bold">
        Results speak for{" "}
        <span className="font-instrumentSerif font-normal italic ">
          themselves.
        </span>
      </div>
      <Marquee
        fade={true}
        pauseOnHover={true}
        className="gap-[3rem] [--duration:10s] motion-reduce:overflow-auto max-w-screen-xl 2xl:max-w-screen-2xl"
        innerClassName="gap-[3rem] [--gap:3rem] motion-reduce:animate-none motion-reduce:first:hidden"
      >
        {testimonials.map((item, index) => (
          <div
            key={item.name}
            className="rounded-2xl flex flex-col gap-12 p-6 border border-[#6E6E6E] w-96  bg-[#0D0D0D]"
          >
            <div className="flex gap-2">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} className="w-5 h-5" />
              ))}
            </div>

            <div className="text-xl text-[#AFAFAF]">
              &quot;{item.message}&quot;
            </div>

            <div className="flex flex-col gap-4">
              <hr />
              <div className="flex gap-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">{item.name}</span>
                  <span className="text-[#6E6E6E]">{item.designation}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
