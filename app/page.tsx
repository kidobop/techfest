import { SmoothScrollHero } from "@/components/SmoothScrollHero";
import Schedule from "@/components/ScheduleTable";
import HeroSection from "@/components/Hero";
import EventCard from "@/components/EventCard";
import Card1 from "@/components/Card1";
import Dept from "@/components/Dept"

export default function Home() {
  return (
    <>
      <SmoothScrollHero />
      <HeroSection />
      <Dept />
      <EventCard />
      <Schedule />
    </>
  );
}
