import { SmoothScrollHero } from "@/components/SmoothScrollHero";
import Schedule from "@/components/ScheduleTable";
import HeroSection from "@/components/Hero";
import Dept from "@/components/Dept"

export default function Home() {
  return (
    <>
      <SmoothScrollHero />
      <HeroSection />
      <Dept />
      <Schedule />
    </>
  );
}
