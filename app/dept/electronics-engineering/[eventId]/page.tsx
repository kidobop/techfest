"use client";

import React from "react";
import { useParams } from "next/navigation";
import FullscreenImageSection from "@/components/FullscreenImageSection";
import Footer from "@/components/Footer";
import DeptHero from "@/components/DeptHero";
import eventsData from "./eventsData";

const EventPage = () => {
  const params = useParams();
  const eventId = params.eventId;
  const event = eventsData.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <h1 className="text-xl sm:text-2xl text-white text-center">
          Event not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <DeptHero
        title={event.eventname}
        imageSrc="/elsa.jpg"
        imageAlt={`${event.eventname} Cover Image`}
        description="Electronics Engineering Department Event"
      />

      {/* Featured Image Section */}
      <FullscreenImageSection
        imageUrl={event.imageUrl}
        alt="Event Featured Image"
      />
      <p className="text-center text-white mt-2">Click to enlarge the image</p>

      {/* Event Details Section */}
      <section className="py-4 sm:py-6 lg:py-8 mb-8 sm:mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Date Card */}
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  Date & Time
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {event.date}
                </p>
              </div>

              {/* Venue Card */}
              {event.venue && (
                <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                    Venue
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {event.venue}
                  </p>
                </div>
              )}

              {/* Registration Card */}
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  Registration
                </h3>
                <a
                  href={event.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors text-center text-sm sm:text-base"
                >
                  Register Now
                </a>
              </div>
            </div>

            {/* Event Description */}
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                About the Event
              </h2>
              <p className="text-gray-300 text-sm sm:text-base whitespace-pre-line">
                {event.fullDescription || event.description}
              </p>
            </div>

            {/* Schedule */}
            {event.schedule && (
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Event Schedule
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {event.schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-700 p-3 sm:p-4 rounded-lg"
                    >
                      <span className="text-gray-300 font-medium text-sm sm:text-base mb-1 sm:mb-0">
                        {item.time}
                      </span>
                      <span className="text-gray-300 text-sm sm:text-base">
                        {item.activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Coordinators */}
            {event.coordinators && (
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Event Coordinators
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {event.coordinators.map((coordinator, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 p-3 sm:p-4 rounded-lg"
                    >
                      <p className="text-white font-semibold text-sm sm:text-base mb-1">
                        {coordinator.name}
                      </p>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {coordinator.contact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EventPage;
