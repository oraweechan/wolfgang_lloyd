import Image from "next/image";
import { portrait1, portrait2, portrait3 } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const PhotoCollage = () => {
  useGSAP(() => {
    if (window.innerWidth >= 768) {
      // Only run animations on screens wider than 768px (typically tablets and larger)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".images",
          scrub: true,
          start: "center-=10% center",
          end: "+=90%",
        },
      });

      tl.to(".image__overlay", {
        opacity: 0.4,
      });
    }
  }, []);
  return (
    <section className="flex flex-wrap justify-center images">
      <div className="w-full sm:w-1/2 md:w-1/3 p-2">
        <div
          className="relative"
          style={{ width: "100%", paddingBottom: "140%" }}
        >
          <div className="image__overlay absolute bg-black h-full w-full z-10 opacity-0"></div>

          <Image
            src={portrait1.src}
            alt={portrait1.alt}
            fill
            className="object-cover rounded-md shadow-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 p-2">
        <div
          className="relative"
          style={{ width: "100%", paddingBottom: "60.66%" }}
        >
          <div className="image__overlay absolute bg-black h-full w-full z-10 opacity-0"></div>

          <Image
            src={portrait2.src}
            alt={portrait2.alt}
            fill
            className="object-cover rounded-md shadow-lg"
          />
        </div>

        <div className="hidden md:flex-center container-padding p-6 md:pt-24 flex-col">
          <h2 className="md:text-9xl">Reel</h2>
          <h3 className="text-2xl md:text-4xl">(↓)</h3>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 p-2">
        <div
          className="relative"
          style={{ width: "100%", paddingBottom: "140%" }}
        >
          <div className="image__overlay absolute bg-black h-full w-full z-10 opacity-0"></div>

          <Image
            src={portrait3.src}
            alt={portrait3.alt}
            fill
            className="object-cover rounded-md shadow-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex-center container-padding p-6 md:pt-24 flex-col md:hidden">
        <h2 className="text-9xl">Reel</h2>
        <h3 className="text-4xl">(↓)</h3>
      </div>
    </section>
  );
};

export default PhotoCollage;
