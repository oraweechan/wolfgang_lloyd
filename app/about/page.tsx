import Image from "next/image";
import { self } from "../../utils";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <main className="min-h-[80vh] flex-center">
        <div className="max-w-screen-lg mb-4">
        <div className="flex-center py-5 md:hidden">
                  <h2 className="text-5xl md:text-7xl  uppercase">
                    About 
                  </h2>
                  <span className="text-5xl md:text-7xl marker w-fit uppercase mt-2 ml-4">
                    Lloyd
                  </span>
                </div>
          <div className="flex flex-col md:flex-row mx-auto max-w-screen-lg px-8 md:py-12 space-y-6 md:space-y-0 md:space-x-6  rounded-md md:gap-16 gap-4">
       
            {/* Image Section */}
            <div className="flex justify-center md:justify-start md:flex-1 ">
              <div className="relative w-full h-[60vh] md:h-[80vh] ">
                <Image
                  src={self.src}
                  alt={self.alt}
                  className="rounded-md grayscale object-fit md:object-cover shadow-2xl"
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="md:flex-1">
              {/* <h2 className="text-4xl md:text-7xl marker w-fit">
            Wolfgang Lloyd
          </h2> */}
              <div className="text-lg leading-relaxed space-y-4">
                <div className="md:flex-center hidden">
                  <h2 className="text-5xl md:text-7xl  uppercase">
                    About 
                  </h2>
                  <span className="text-5xl md:text-7xl marker w-fit uppercase mt-2 ml-4">
                    Lloyd
                  </span>
                </div>
                <p>
                  Wolfgang Lloyd Media was founded to meet the evolving needs of
                  creating original, compelling content in a rapidly changing
                  world. With extensive professional experience in production
                  across Los Angeles, CA, founder Wolfgang Lloyd leads a team
                  that excels in both local and global markets.
                </p>
                <p>
                  Our team’s expertise spans over a decade, during which we’ve
                  successfully produced and directed music videos, feature
                  films, short films, and commercial projects. We are committed
                  to helping you grow your brand—whether that means attracting
                  customers to your product or service, engaging audiences
                  through impactful storytelling, enhancing internal
                  communications, or capturing a special event.
                </p>
                <p>
                  At Wolfgang Lloyd Media, we are dedicated to partnering with
                  you for your success. We guide you through the entire
                  production process, from creative direction and script
                  development, to actor casting, location scouting, and set
                  design, all the way to editing, animation, color grading, and
                  sound design.
                </p>
                <p>
                  Renowned for our creativity, professionalism, and reliability,
                  Wolfgang Lloyd Media consistently ranks among the top video
                  production companies in Los Angeles. We seamlessly blend
                  cutting-edge technology with timeless cinematic techniques to
                  deliver exceptional results that resonate with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
