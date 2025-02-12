"use client";
import React from "react";
import DeptHero from "@/components/DeptHero";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ComputerEngineering = () => {
  const eventsData = [
    {
      eventname: "Coding Workshop",
      description: "Learn the fundamentals of web development in this intensive workshop.",
      date: "Feb 25, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/coding-workshop",
    },
    {
      eventname: "AI Seminar",
      description: "An introductory seminar on Artificial Intelligence and its applications.",
      date: "Mar 10, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/ai-seminar",
    },
    {
      eventname: "Cybersecurity Conference",
      description: "Explore the latest trends and challenges in cybersecurity.",
      date: "Apr 05, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://example.com/cybersecurity-conference",
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