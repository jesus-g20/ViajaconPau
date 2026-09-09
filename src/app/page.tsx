import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhyUs />
        <HowItWorks />
        <Services />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}