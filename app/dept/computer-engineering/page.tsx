"use client";
import React from "react";
import DeptHero from "@/components/DeptHero";
import EventCard from "@/components/EventCard";
import { motion } from "framer-motion"; // Add this import

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
    <div>
      <DeptHero
        title="Computer Engineering"
        imageSrc="/900.jpg"
        imageAlt="Computer Engineering Cover Image"
        description="Welcome to the Computer Engineering department. Explore our events here."
      />
      {/* Events Subheading */}
      <section className="pt-8">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Events
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {eventsData.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
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
    </div>
  );
};

export default ComputerEngineering;