import { SmoothScrollHero } from "@/components/SmoothScrollHero";
import HeroSection from "@/components/Hero";
import Dept from "@/components/Dept"
import Location from "@/components/Location";
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <>
      <SmoothScrollHero />
      <HeroSection />
      <Dept />
      <Location />
      <Footer />
    </>
  );
}
