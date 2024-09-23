import React from "react";
import BackgroundVideo from "./ui/BackgroundVideo";

const Hero = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className=" text-center p-6 flex items-center justify-center">
        <h1
          id="hero-heading"
          className="text-4xl md:text-8xl lg:text-9xl font-black uppercase leading-none"
        >
          Wolfgang Lloyd
        </h1>
      </div>

      {/* Video Section */}
      <div className="h-auto flex items-center justify-center rounded-lg">
        <BackgroundVideo />
      </div>
      <div className=" text-center p-4 md:p-6">
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Producer | Director | Editor
        </p>
      </div>
    </div>
  );
};

export default Hero;
