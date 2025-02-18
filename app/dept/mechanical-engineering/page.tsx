"use client";
import React from "react";
import DeptHero from "@/components/DeptHero";
import EventCard from "@/components/EventCardME";
import Footer from "@/components/Footer";
import eventsData from "./[eventId]/eventsData";

const MechanicalEngineering = () => {

  return (
    <div className="min-h-screen">
      <DeptHero
        title="Mechanical Engineering"
        imageSrc="/mexm.jpg"
        imageAlt="Mechanical Engineering Cover Image"
        description="Welcome to the Mechanical Engineering department. Explore our events here."
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

export default MechanicalEngineering;
