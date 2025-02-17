"use client";
import React from "react";
import DeptHero from "@/components/DeptHero";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";

const ComputerEngineering = () => {
  const eventsData = [
    {
      id: "hackathon-and-idea-pitching",
      eventname: "Hackathon and Idea Pitching",
      description:
        "Participate in a hackathon and pitch your innovative ideas.",
      date: "Feb 25, 2025",
      imageUrl:
        "https://ik.imagekit.io/dvz2h68tj/Posters/36776798_8467755.png?updatedAt=1739758889014",
      registerUrl: "https://example.com/hackathon",
    },
    {
      id: "website-design",
      eventname: "Website Design",
      description: "Showcase your web design skills in this competitive event.",
      date: "Feb 25, 2025",
      imageUrl:
        "https://ik.imagekit.io/dvz2h68tj/Posters/Picsart_25-02-16_19-34-18-055.jpg?updatedAt=1739728982165",
      registerUrl: "https://example.com/website-design",
    },
    {
      id: "it-quiz",
      eventname: "IT Quiz",
      description: "Test your knowledge in an exciting IT quiz competition.",
      date: "Feb 24, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/it-quiz",
    },
    {
      id: "hack-and-seek",
      eventname: "Hack and Seek",
      description:
        "Solve puzzles and escape the room in this thrilling challenge.",
      date: "Feb 24, 2025",
      imageUrl:
        "https://ik.imagekit.io/dvz2h68tj/Posters/IMG-20250216-WA0200.jpg?updatedAt=1739728982178",
      registerUrl: "https://example.com/escape-room",
    },
    {
      id: "crack-the-code",
      eventname: "Crack the Code",
      description:
        "Put your problem-solving skills to the test with various puzzles.",
      date: "Feb 25, 2025",
      imageUrl:
        "https://ik.imagekit.io/dvz2h68tj/Posters/IMG-20250216-WA0201(1).jpg?updatedAt=1739728982003",
      registerUrl: "https://example.com/puzzle-solving",
    },
    {
      id: "e-games",
      eventname: "E-Games",
      description:
        "Compete in various e-games and show off your gaming skills.",
      date: "Feb 24, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/e-games",
    },
    {
      id: "fun-games",
      eventname: "Fun Games",
      description: "Enjoy a variety of fun games and activities.",
      date: "Feb 25, 2025",
      imageUrl:
        "https://ik.imagekit.io/dvz2h68tj/Posters/Picsart_25-02-15_18-17-30-025.jpg?updatedAt=1739728982651",
      registerUrl: "https://example.com/fun-games",
    },
    {
      id: "spot-photography",
      eventname: "Spot Photography",
      description:
        "Capture the moment in this on-the-spot photography competition.",
      date: "Feb 25, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/spot-photography",
    },
    {
      id: "fast-typing",
      eventname: "Fast Typing",
      description:
        "Test your typing speed in this fast-paced typing competition.",
      date: "Feb 24, 2025",
      imageUrl:
        "https://ik.imagekit.io/dvz2h68tj/Posters/IMG-20250216-WA0174.jpg?updatedAt=1739728981999",
      registerUrl: "https://example.com/fast-typing",
    },
    {
      id: "rubiks-cube",
      eventname: "Rubik's Cube",
      description:
        "Solve the Rubik's Cube as fast as you can in this speed challenge.",
      date: "Feb 25, 2025",
      imageUrl:
        "https://ik.imagekit.io/dvz2h68tj/Posters/IMG-20250216-WA0191.jpg?updatedAt=1739728982008",
      registerUrl: "https://example.com/rubiks-cube",
    },
    {
      id: "mehndi",
      eventname: "Mehndi",
      description:
        "Showcase your artistic skills in this traditional Mehndi competition.",
      date: "Feb 25, 2025",
      imageUrl:
        "https://ik.imagekit.io/dvz2h68tj/Posters/Picsart_25-02-15_17-14-39-353.png?updatedAt=1739728982776",
      registerUrl: "https://example.com/mehndi",
    },
  ];

  return (
    <div className="min-h-screen">
      <DeptHero
        title="Computer Engineering"
        imageSrc="/900.jpg"
        imageAlt="Computer Engineering Cover Image"
        description="Welcome to the Computer Engineering department. Explore our events here."
      />
      <section className="py-6 sm:py-8 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">
            Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-0">
            {eventsData.map((event, index) => (
              <div key={index} className="w-full max-w-sm mx-auto">
                <EventCard
                  id={event.id}
                  eventname={event.eventname}
                  description={event.description}
                  date={event.date}
                  imageUrl={event.imageUrl}
                  registerUrl={event.registerUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ComputerEngineering;
