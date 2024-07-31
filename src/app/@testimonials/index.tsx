import { Marquee } from "@devnomic/marquee";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mollie Morris",
      designation: "CEO of Company 1",
      image: "https://picsum.photos/seed/picsum/200/200",
      message:
        "Integration with our existing tools was seamless. Scalable fits perfectly into our workflow.",
    },
    // {
    //   name: "Alex Jomiah",
    //   designation: "CEO of Company 2",
    //   image: "https://picsum.photos/seed/picsum/200/200",
    //   message:
    //     "Integration with our existing tools was seamless. Scalable fits perfectly into our workflow.",
    // },
    // {
    //   name: "Belinda Meyers",
    //   designation: "CEO of Company 3",
    //   image: "https://picsum.photos/seed/picsum/200/200",
    //   message:
    //     "Integration with our existing tools was seamless. Scalable fits perfectly into our workflow.",
    // },
  ];

  return (
    <div className="flex flex-col items-center gap-12 w-full">
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
        className="gap-[3rem] [--duration:10s] max-w-3xl 2xl:max-w-7xl max-h-20 motion-reduce:overflow-auto"
        innerClassName="gap-[3rem] [--gap:3rem] motion-reduce:animate-none motion-reduce:first:hidden"
      >
        {/* {testimonials.map((item, index) => (
          <div key={item.name} className=""></div>
        ))} */}
        <div>1</div>
        <div>2</div>
      </Marquee>
    </div>
  );
};

export default Testimonials;
