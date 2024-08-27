"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhotoCollage from "./PhotoCollage";
import VideoTransition from "./VideoTransition";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  useGSAP(() => {
    if (window.innerWidth >= 768) {  // Only run animations on screens wider than 768px (typically tablets and larger)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".works",
          pin: true,
          scrub: true,
          start: "center-=10% center",
          end: "+=90%",
        },
      });

      let sections = gsap.utils.toArray<HTMLElement>(".section");

      sections.forEach((section, i) => {
        if (i === 0) {
          tl.to(section, {
            duration: 1,

          });
        } else {
          tl.to(
            section,
            {
              yPercent: -100,
              duration: 1,
              ease: "none",
      
            },
            "+=1"
          );
        }
      });
    }
  }, []);

  return (
    <div className="works md:relative ">
      <section className="section md:h-screen w-full flex justify-center" id="photo-collage">
      <div className="md:w-5/6">

        <PhotoCollage />
      </div>
      </section>

      <section className="section md:h-screen w-full md:absolute" id="video-transition">
        <VideoTransition />
      </section>
    </div>
  );
};

export default Works;
