import { Marquee } from "@devnomic/marquee";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alan NealLarry McLaughlin",
      location: "USA",
      image: "/assets/testimonials/male.png",
      message:
        "Avocado Tech has helped my company immensely to achieve outstanding results in terms of search engine rankings. Apart from their strategy and work process, the thing that strikes me the most is their cost-effectiveness.",
    },
    {
      name: "Alan Neal",
      location: "London",
      image: "/assets/testimonials/male.png",
      message:
        "Our project was completed in a pre-defined timeframe with high standards. Effective and smooth communication throughout the process was the main catalyst to that. I highly recommended them for any web development work.",
    },
    {
      name: "Brady Smith",
      location: "Edinburgh",
      image: "/assets/testimonials/male.png",
      message:
        "I am 100% satisfied with the redesigning of my website. They were very patient throughout the process, I made changes to the website several times, they executed those properly till I was 100% satisfied. You rarely find teams like this these days.",
    },
    {
      name: "Inna Proshkina",
      location: "Russia",
      image: "/assets/testimonials/female.png",
      message:
        "Our aim initially was to build an android app, but with the highly skilled team at Avocado Tech we were able to get seamlessly performing iOS and android versions. We will strongly consider them for our future requirements.",
    },
    {
      name: "Vincent Tan",
      location: "Singapore",
      image: "/assets/testimonials/male.png",
      message:
        "I have been working with Avocado Tech for a while now. They have been managing my Google Ads account and doing a great job. Highly recommended. You rarely find teams like this these days.",
    },
    {
      name: "Rajesh Mehta",
      location: "India",
      image: "/assets/testimonials/male.png",
      message:
        "Avocado Tech really improved our digital marketing. Thanks to their efforts, we're now getting more visitors and inquiries through our website. They know their stuff and are easy to work with. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      location: "India",
      image: "/assets/testimonials/female.png",
      message:
        "We're happy with the PPC campaigns Avocado Tech managed for us. They helped us get more traffic and better results without wasting money. The team was always available to answer our questions and make changes when needed.",
    },
    {
      name: "Sanjay Patel",
      location: "India",
      image: "/assets/testimonials/male.png",
      message:
        "Avocado Tech did a great job developing our new website. It's user-friendly and exactly what we needed. They were professional throughout and always made sure we were satisfied. We'll definitely work with them again.",
    },
    {
      name: "Neha Verma",
      location: "India",
      image: "/assets/testimonials/female.png",
      message:
        "Avocado Tech has been a huge help with our digital marketing. Since we started working with them, we've seen more engagement and better sales. They're quick to adapt to changes and always give good advice. We're very pleased with their work.",
    },
    {
      name: "Anil Kumar",
      location: "India",
      image: "/assets/testimonials/male.png",
      message:
        "Working with Avocado Tech on our digital marketing has been a positive experience. They helped us reach more customers and grow our brand. They really know what they're doing, and it shows in the results.",
    },
    {
      name: "Swati Deshmukh",
      location: "India",
      image: "/assets/testimonials/female.png",
      message:
        "Avocado Tech redesigned our website, and it looks amazing! They listened to what we wanted and delivered exactly that. The new site is easy to use and has received a lot of compliments from our customers. Great job!",
    },
    {
      name: "Mark Johnson",
      location: "United States",
      image: "/assets/testimonials/male.png",
      message:
        "We've seen a big increase in our website traffic since Avocado Tech started handling our digital marketing. Their SEO and content strategies really paid off. They're easy to work with and always keep us informed.",
    },
    {
      name: "Emily Davis",
      location: "Canada",
      image: "/assets/testimonials/female.png",
      message:
        "Avocado Tech has been managing our online ads, and we're seeing much better results than before. They're good at what they do, and we've noticed a drop in our ad costs while getting more conversions. Highly recommend them.",
    },
    {
      name: "Michael Andersen",
      location: "Denmark",
      image: "/assets/testimonials/male.png",
      message:
        "Avocado Tech built our mobile app, and we're very happy with the result. They understood what we needed and delivered on time. The app works perfectly, and they were always ready to help with any questions we had. We'll definitely consider them for future projects.",
    },
    {
      name: "Sophia Müller",
      location: "Germany",
      image: "/assets/testimonials/female.png",
      message:
        "We worked with Avocado Tech for our digital marketing, and they did a great job. They helped us launch our product online and reach new customers. The team was easy to communicate with and always kept us in the loop. We're very satisfied with their work.",
    },
  ];

  return (
    <div
      id="testimonials"
      className="flex flex-col items-center gap-16 w-full pt-36 md:pt-56"
    >
      <button className="rounded-full font-bold px-6 py-2 text-center md:px-10 md:py-3 text-sm md:text-lg border border-white">
        Testimonials
      </button>

      {/* <div className="text-2xl sm:text-5xl md:text-6xl font-bold text-center">
        We are collecting client{" "}
        <span className="font-instrumentSerif font-normal italic ">
          reviews.
        </span>
      </div> */}

      <div className="text-2xl sm:text-5xl md:text-6xl font-bold">
        Results speak for{" "}
        <span className="font-instrumentSerif font-normal italic ">
          themselves.
        </span>
      </div>
      <Marquee
        fade={true}
        pauseOnHover={true}
        className="gap-[3rem] [--duration:10s] w-11/12 md:max-w-4xl 2xl:max-w-7xl motion-reduce:overflow-auto"
        innerClassName="gap-[3rem] [--gap:3rem] motion-reduce:animate-none motion-reduce:first:hidden"
      >
        {testimonials.map((item, index) => (
          <div
            key={item.name}
            className="rounded-2xl flex flex-col gap-8 sm:gap-12 p-4 sm:p-6 border border-[#6E6E6E] w-96 bg-[#0D0D0D]"
          >
            <div className="flex gap-2">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
              ))}
            </div>

            <div className="text-lg sm:text-xl text-[#AFAFAF]">
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
                  <span className="text-[#6E6E6E] text-sm">
                    {item.location}
                  </span>
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
