import Image from "next/image";
import { film1, film2, film3 } from "../utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export const FilmPhotos = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#film-photo-container",
        start: "top center",
        end: "center center",
        scrub: 3,
      },
    });

    tl.from(".film-photo", {
      yPercent: 100,
      ease: "power2.out",
      stagger: 0.3,
    });

    tl.to(
      ".film-photo",
      {
        yPercent: 0,
        ease: "power2.out",
        stagger: 0.3,
      },
      0.8
    );
  }, []);
  return (
   <section id="film-photo-container" className="flex flex-wrap justify-center">
      <div className="film-photo w-full sm:w-1/2 md:w-1/3 p-2">
        <div className="relative w-full h-0 pb-[100%]"> {/* Aspect ratio 1:1 */}
          <Image
            src={film1.src}
            alt={film1.alt}
            fill
            className="object-cover rounded"
          />
        </div>
      </div>
      <div className="film-photo w-full sm:w-1/2 md:w-1/3 p-2">
        <div className="relative w-full h-0 pb-[100%]"> {/* Aspect ratio 1:1 */}
          <Image
            src={film2.src}
            alt={film2.alt}
            fill
            className="object-cover rounded"
          />
        </div>
      </div>
      <div className="film-photo w-full sm:w-1/2 md:w-1/3 p-2">
        <div className="relative w-full h-0 pb-[100%]"> {/* Aspect ratio 1:1 */}
          <Image
            src={film3.src}
            alt={film3.alt}
            fill
            className="object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default FilmPhotos;
