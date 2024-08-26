import FilmPhotos from "@/components/FilmPhotos";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MissionAndWorks from "@/components/MissionAndWorks";
import Services from "@/components/Services";
import IntroSection from "@/components/ui/IntroSection";
import Section from "@/components/ui/Section";

import Works from "@/components/Works";

export default function Home() {
  return (
    <>
    <main className="bg-beige ">
      <Hero />
      <MissionAndWorks />
      <Services />
    </main>
    <Footer />
  </>
    // <>
    //   <main className="bg-beige ">
    //     <Hero />
    //     <Services/>
    //     <Section />
    //     {/* <IntroSection /> */}
    //     <FilmPhotos />
    //     <Works />
    //     {/* <MissionAndWorks /> */}
    //     <Services />
    //   </main>
    //   <Footer />
    // </>
  );
}
