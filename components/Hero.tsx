import React from "react";
import { film1 } from "../utils"; // Adjust the import path as needed
import BackgroundVideo from "./ui/BackgroundVideo";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
   <BackgroundVideo/>
   <div className="relative z-10 text-white text-center flex flex-col justify-center items-center h-full">
        {/* Your page content goes here */}
        <div className="">
      <h1
        id="hero-heading"
        className="text-4xl md:text-8xl lg:text-9xl font-black uppercase leading-none text-white"
        style={{
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', 
        }}
      >
        Wolfgang
      </h1>
      <h1
        id="hero-heading"
        className="font-black uppercase text-[100px] md:text-[200px] lg:text-[280px] xl:text-[340px] leading-none text-white"
        style={{
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', 
        }}
      >
        Lloyd
      </h1>
      <p
        className="hero-subtitle text-2xl md:text-4xl lg:text-5xl text-white"
        style={{
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', 
        }}
      >
        Producer | Director | Editor
      </p>
    </div>
      </div>
  
  </div>
    // <div className="min-h-screen flex flex-col items-center  bg-black">
    //   <div className="max-w-screen-lg">

    //   {/* Text Above the Video */}
    //   <div className="text-white text-center pt-8 flex items-center">
    //     <h1
    //       id="hero-heading"
    //       className="text-4xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-none"
    //     >
    //       Wolfgang 
    //     </h1>
    //     <h1
    //       id="hero-heading"
    //       className="font-black text-white uppercase text-9xl leading-none ml-10"
    //     >
    //       Lloyd
    //     </h1>
    //   </div>

    //   {/* Video Section */}
    //   <div className="flex flex-col items-center justify-center w-full h-auto ">
    //     <BackgroundVideo />
    //     <div className="text-white text-center p-4">
    //       <p
    //         className="text-xl md:text-2xl lg:text-3xl font-semibold"
    //       >
    //         Producer | Director | Editor
    //       </p>
    //     </div>
    //   </div>
    //   </div>
    // </div>
    // <section
    //   className="relative flex flex-col bg-cover bg-center bg-no-repeat h-screen"
    //   style={{ backgroundImage: `url(${film1.src})` }}
    //   aria-labelledby="hero-heading"
    // >

    //   <div className="flex items-center justify-center w-full h-screen bg-black bg-opacity-50 text-white">
    //     <div className="">
    //       <h1
    //         id="hero-heading"
    //         className="text-4xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-none"
    //         style={{ WebkitTextStroke: '1px black' }} // Adding text outline
    //       >
    //         Wolfgang
    //       </h1>
    //       <h1
    //         id="hero-heading"
    //         className="font-black text-white uppercase text-[100px] md:text-[200px] lg:text-[280px] xl:text-[340px] leading-none"  // Adjusted line height and text outline
    //         style={{ WebkitTextStroke: '2px black' }} // Adding text outline
    //       >
    //         Lloyd
    //       </h1>
    //       <p
    //         className="hero-subtitle "
    //         style={{ WebkitTextStroke: '1px black' }} // Optional: Adding text outline to subtitle
    //       >
    //         Producer | Director | Editor
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
