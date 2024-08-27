"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const IntroSection = () => {
  useGSAP(() => {
    const texts = Array.from(document.querySelectorAll(".text__effect"));

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-block",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    });
    texts.forEach((text) => {
      const overlay = text.querySelector(".text__overlay");
      tl.to(overlay, {
        scaleX: 0,
      });
    });
  }, []);
  return (
    <section className="flex justify-center md:my-32">
      <div className="max-w-7xl w-full">
        <div className="flex-center flex-col gap-4">
          <div className="flex-center flex-col">
            <span className="text-4xl/relaxed md:text-8xl marker font-black block">
              Bringing Stories to Life
            </span>
            <span className="block text-4xl/3 md:text-8xl font-black ">
              One Frame at a Time
            </span>
          </div>
          <article className="flex-center flex-col container-padding py-4 text-center w-full  text-block">
          <div className=" md:text-2xl">
            <div className="text__effect">
              <div className="text__overlay"></div>
              <p className="leading-relaxed md:leading-normal max-w-[44ch] md:max-w-[75ch] text-left md:text-center">
                Based in Los Angeles, USA, I&apos;ve had the privilege of
                working on a diverse range of video
              </p>
            </div>
            <div className="text__effect">
              <div className="text__overlay"></div>
              <p className="leading-relaxed md:leading-normal max-w-[44ch] md:max-w-[75ch] text-left md:text-center">
                projects, including commercials, corporate videos, weddings, and
                industrial films, across
              </p>
            </div>
            <div className="text__effect">
              <div className="text__overlay"></div>
              <p className="leading-relaxed md:leading-normal max-w-[44ch] md:max-w-[75ch] text-left md:text-center">
                over a dozen countries. I offer comprehensive services
                throughout the video production
              </p>
            </div>
            <div className="text__effect">
              <div className="text__overlay"></div>
              <p className="leading-relaxed md:leading-normal max-w-[44ch] md:max-w-[75ch] text-left md:text-center">
                process, from creative direction and script development to
                casting, location scouting, set
              </p>
            </div>
            <div className="text__effect">
              <div className="text__overlay"></div>
              <p className="leading-relaxed md:leading-normal max-w-[44ch] md:max-w-[75ch] text-left md:text-center">
                design, editing, animation, color grading, and sound design.
              </p>
            </div>
          </div>
        </article>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
