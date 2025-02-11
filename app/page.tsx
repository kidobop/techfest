import { SmoothScrollHero } from "@/components/SmoothScrollHero";
import Schedule from "@/components/ScheduleTable";
import HeroSection from "@/components/Hero";
import EventCard from "@/components/EventCard";
import Card1 from "@/components/Card1";

export default function Home() {
  return (
    <>
      <SmoothScrollHero />
      <HeroSection />
      <Card1
        imageSrc="/ta.png"
        imageAlt="Description for Image 1"
        title="Computer Engineering"
      />
      <EventCard />
      <Schedule />
    </>
  );
}
