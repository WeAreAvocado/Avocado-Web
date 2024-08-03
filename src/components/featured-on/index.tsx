import "@devnomic/marquee/dist/index.css";
import { Marquee } from "@devnomic/marquee";
import Image from "next/image";
import featuredOn1 from "./1.png";
import featuredOn2 from "./2.png";
import featuredOn3 from "./3.png";
import featuredOn4 from "./4.png";
import featuredOn5 from "./5.png";
import featuredOn6 from "./6.png";

const FeaturedOn = () => {
  const featuredOn = [
    featuredOn1,
    featuredOn2,
    featuredOn3,
    featuredOn4,
    featuredOn5,
    featuredOn6,
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-[#6E6E6E] font-semibold py-8">
        Our designs are featured on:
      </span>
      {/* marquee type effect */}
      <Marquee
        fade={true}
        pauseOnHover={true}
        className="gap-[3rem] [--duration:10s] max-w-3xl 2xl:max-w-7xl max-h-20 motion-reduce:overflow-auto"
        innerClassName="gap-[3rem] [--gap:3rem] motion-reduce:animate-none motion-reduce:first:hidden"
      >
        {featuredOn.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="Featured On Image"
            className="w-full h-12"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default FeaturedOn;
