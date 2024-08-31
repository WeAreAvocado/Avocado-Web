import About from "@/components/about";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex w-screen justify-center max-w-screen-xl 2xl:max-w-screen-2xl m-auto">
      <About isSeparatePage />
    </div>
  );
};

export default AboutPage;
