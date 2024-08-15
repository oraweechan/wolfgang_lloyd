"use client";
import React from "react";
import Works from "./Works";
import FilmPhotos from "./FilmPhotos";

const MissionAndWorks = () => {
  return (
    <section className="flex-center">
      <div className="w-full">
        <FilmPhotos />

        <article className="flex flex-col container-padding text-center items-center justify-center w-full py-32">
          <h2
            id="features_title"
            className='md:text-2xl'
          >
            Based in Los Angeles, USA, I&apos;ve had the privilege of working on
            a diverse range of video projects, including commercials, corporate
            videos, weddings, and industrial films, across over a dozen
            countries. I offer comprehensive services throughout the video
            production process, from creative direction and script development
            to casting, location scouting, set design, editing, animation, color
            grading, and sound design.
          </h2>
        </article>

        <Works />
      </div>
    </section>
  );
};

export default MissionAndWorks;
