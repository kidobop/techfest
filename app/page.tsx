import { SmoothScrollHero } from "@/components/SmoothScrollHero";
import Schedule from "@/components/ScheduleTable";
import HeroSection from "@/components/Hero";
import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <>
      <SmoothScrollHero />
      <HeroSection />
      <EventCard />
      <Schedule />
    </>
  );
}
