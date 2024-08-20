import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MissionAndWorks from "@/components/MissionAndWorks";
import Services from "@/components/Services";

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
  );
}
