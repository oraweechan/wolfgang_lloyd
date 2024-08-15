"use client";
import React from "react";
import Works from "./Works";
import FilmPhotos from "./FilmPhotos";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const MissionAndWorks = () => {
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
    <section className="flex-center">
      <div className="w-full">
        <FilmPhotos />

        <article className="flex-center flex-col container-padding text-center w-full my-40 text-block">
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

        <Works />
      </div>
    </section>
  );
};

export default MissionAndWorks;
