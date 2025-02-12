"use client";
import React from "react";
import DeptHero from "@/components/DeptHero";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ComputerEngineering = () => {
  const eventsData = [
    {
      eventname: "Hackathon and Idea Pitching",
      description: "Participate in a hackathon and pitch your innovative ideas.",
      date: "Feb 25, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/hackathon",
    },
    {
      eventname: "Website Design",
      description: "Showcase your web design skills in this competitive event.",
      date: "Mar 10, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/website-design",
    },
    {
      eventname: "IT Quiz",
      description: "Test your knowledge in an exciting IT quiz competition.",
      date: "Apr 05, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/it-quiz",
    },
    {
      eventname: "Escape Room",
      description: "Solve puzzles and escape the room in this thrilling challenge.",
      date: "May 20, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/escape-room",
    },
    {
      eventname: "Puzzle Solving",
      description: "Put your problem-solving skills to the test with various puzzles.",
      date: "Jun 15, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/puzzle-solving",
    },
    {
      eventname: "E-Games",
      description: "Compete in various e-games and show off your gaming skills.",
      date: "Jul 10, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/e-games",
    },
    {
      eventname: "Fun Games",
      description: "Enjoy a variety of fun games and activities.",
      date: "Aug 05, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/fun-games",
    },
    {
      eventname: "Spot Photography",
      description: "Capture the moment in this on-the-spot photography competition.",
      date: "Sep 20, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/spot-photography",
    },
    {
      eventname: "Fast Typing",
      description: "Test your typing speed in this fast-paced typing competition.",
      date: "Oct 15, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/fast-typing",
    },
    {
      eventname: "Rubik's Cube",
      description: "Solve the Rubik's Cube as fast as you can in this speed challenge.",
      date: "Nov 10, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/rubiks-cube",
    },
    {
      eventname: "Mehndi",
      description: "Showcase your artistic skills in this traditional Mehndi competition.",
      date: "Dec 05, 2025",
      imageUrl: "/900.jpg",
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
      {/* Events Subheading */}
      <section className="py-6 sm:py-8 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Events
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {eventsData.map((event, index) => (
              <motion.div
                key={index}
                className="w-full max-w-sm mx-auto" // Added max-w-sm and mx-auto
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  viewport: { once: true }
                }}
              >
                <EventCard
                  eventname={event.eventname}
                  description={event.description}
                  date={event.date}
                  imageUrl={event.imageUrl}
                  registerUrl={event.registerUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ComputerEngineering;
