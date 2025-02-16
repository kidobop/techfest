"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from 'next/image';
import Footer from "@/components/Footer";
import DeptHero from "@/components/DeptHero";

// Move this to a separate file like utils/eventData.ts in production
const eventsData = [
  {
    id: "hackathon-and-idea-pitching",
    eventname: "Hackathon and Idea Pitching",
    description: "Participate in a hackathon and pitch your innovative ideas.",
    date: "Feb 25, 2025",
    imageUrl: "/900.jpg",
    registerUrl: "https://example.com/hackathon",
    fullDescription: `Join us for an exciting hackathon where you can showcase your
    innovative ideas and technical skills. This event includes:
    - 24-hour coding challenge
    - Mentorship sessions
    - Pitch presentation
    - Networking opportunities`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Opening Ceremony" },
      { time: "11:00 AM", activity: "Hacking Begins" }
    ],
    venue: "Engineering Block, Room 301",
    coordinators: [
      { name: "John Doe", contact: "john@example.com" },
      { name: "Jane Smith", contact: "jane@example.com" }
    ]
  },
  {
    id: "website-design",
    eventname: "Website Design",
    description: "Showcase your web design skills in this competitive event.",
    date: "Mar 10, 2025",
    imageUrl: "/900.jpg",
    registerUrl: "https://example.com/website-design",
    fullDescription: `Participate in a website design competition where you can showcase your creativity and technical skills. This event includes:
    - Design challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Design Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" }
    ],
    venue: "Design Studio, Room 202",
    coordinators: [
      { name: "Alice Johnson", contact: "alice@example.com" },
      { name: "Bob Brown", contact: "bob@example.com" }
    ]
  },
  {
    id: "it-quiz",
    eventname: "IT Quiz",
    description: "Test your knowledge in an exciting IT quiz competition.",
    date: "Apr 05, 2025",
    imageUrl: "/900.jpg",
    registerUrl: "https://example.com/it-quiz",
    fullDescription: `Join us for an exciting IT quiz competition where you can test your knowledge and win exciting prizes. This event includes:
    - Multiple rounds of quizzes
    - Expert judges
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Quiz Round 1" },
      { time: "11:00 AM", activity: "Quiz Round 2" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Final Round" },
      { time: "2:00 PM", activity: "Award Ceremony" }
    ],
    venue: "Auditorium, Room 101",
    coordinators: [
      { name: "Charlie Davis", contact: "charlie@example.com" },
      { name: "Daisy Miller", contact: "daisy@example.com" }
    ]
  },
  {
    id: "escape-room",
    eventname: "Escape Room",
    description: "Solve puzzles and escape the room in this thrilling challenge.",
    date: "May 20, 2025",
    imageUrl: "/900.jpg",
    registerUrl: "https://example.com/escape-room",
    fullDescription: `Join us for an exciting escape room challenge where you can solve puzzles and escape the room. This event includes:
    - Multiple escape rooms
    - Team challenges
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Escape Room Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Award Ceremony" }
    ],
    venue: "Escape Room, Room 404",
    coordinators: [
      { name: "Eve White", contact: "eve@example.com" },
      { name: "Frank Black", contact: "frank@example.com" }
    ]
  },
  {
    id: "puzzle-solving",
    eventname: "Puzzle Solving",
    description: "Put your problem-solving skills to the test with various puzzles.",
    date: "Jun 15, 2025",
    imageUrl: "/900.jpg",
    registerUrl: "https://example.com/puzzle-solving",
    fullDescription: `Join us for an exciting puzzle-solving competition where you can test your problem-solving skills. This event includes:
    - Multiple puzzle challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Puzzle Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" }
    ],
    venue: "Puzzle Room, Room 505",
    coordinators: [
      { name: "Grace Green", contact: "grace@example.com" },
      { name: "Henry Blue", contact: "henry@example.com" }
    ]
  },
  {
    id: "e-games",
    eventname: "E-Games",
    description: "Compete in various e-games and show off your gaming skills.",
    date: "Jul 10, 2025",
    imageUrl: "/900.jpg",
    registerUrl: "https://example.com/e-games",
    fullDescription: `Join us for an exciting e-games competition where you can showcase your gaming skills. This event includes:
    - Multiple gaming challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Gaming Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" }
    ],
    venue: "Gaming Room, Room 606",
    coordinators: [
      { name: "Ivy Red", contact: "ivy@example.com" },
      { name: "Jack Yellow", contact: "jack@example.com" }
    ]
  },
  {
    id: "fun-games",
    eventname: "Fun Games",
    description: "Enjoy a variety of fun games and activities.",
    date: "Aug 05, 2025",
    imageUrl: "/900.jpg",
    registerUrl: "https://example.com/fun-games",
    fullDescription: `Join us for a day of fun games and activities. This event includes:
    - Various fun games
    - Exciting activities
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Fun Games Begin" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Award Ceremony" }
    ],
    venue: "Fun Room, Room 707",
    coordinators: [
      { name: "Kelly Orange", contact: "kelly@example.com" },
      { name: "Liam Purple", contact: "liam@example.com" }
    ]
  },
  {
    id: "spot-photography",
    eventname: "Spot Photography",
    description: "Capture the moment in this on-the-spot photography competition.",
    date: "Sep 20, 2025",
    imageUrl: "/900.jpg",
    registerUrl: "https://example.com/spot-photography",
    fullDescription: `Join us for an exciting on-the-spot photography competition where you can capture the moment. This event includes:
    - Photography challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Photography Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" }
    ],
    venue: "Photography Room, Room 808",
    coordinators: [
      { name: "Mia Pink", contact: "mia@example.com" },
      { name: "Nolan Brown", contact: "nolan@example.com" }
    ]
  },
  {
    id: "fast-typing",
    eventname: "Fast Typing",
    description: "Test your typing speed in this fast-paced typing competition.",
    date: "Oct 15, 2025",
    imageUrl: "/900.jpg",
    registerUrl: "https://example.com/fast-typing",
    fullDescription: `Join us for an exciting fast-typing competition where you can test your typing speed. This event includes:
    - Typing challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Typing Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" }
    ],
    venue: "Typing Room, Room 909",
    coordinators: [
      { name: "Olivia White", contact: "olivia@example.com" },
      { name: "Peter Green", contact: "peter@example.com" }
    ]
  },
  {
    id: "rubiks-cube",
    eventname: "Rubik's Cube",
    description: "Solve the Rubik's Cube as fast as you can in this speed challenge.",
    date: "Nov 10, 2025",
    imageUrl: "/900.jpg",
    registerUrl: "https://example.com/rubiks-cube",
    fullDescription: `Join us for an exciting Rubik's Cube speed challenge where you can solve the Rubik's Cube as fast as you can. This event includes:
    - Speed challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Speed Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" }
    ],
    venue: "Rubik's Cube Room, Room 1010",
    coordinators: [
      { name: "Quinn Blue", contact: "quinn@example.com" },
      { name: "Rachel Red", contact: "rachel@example.com" }
    ]
  },
  {
    id: "mehndi",
    eventname: "Mehndi",
    description: "Showcase your artistic skills in this traditional Mehndi competition.",
    date: "Dec 05, 2025",
    imageUrl: "/900.jpg",
    registerUrl: "https://example.com/mehndi",
    fullDescription: `Join us for an exciting Mehndi competition where you can showcase your artistic skills. This event includes:
    - Mehndi challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Mehndi Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" }
    ],
    venue: "Mehndi Room, Room 1111",
    coordinators: [
      { name: "Sophia Green", contact: "sophia@example.com" },
      { name: "Thomas Brown", contact: "thomas@example.com" }
    ]
  }
];

const EventPage = () => {
  const params = useParams();
  const eventId = params.eventId;
  const event = eventsData.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <h1 className="text-xl sm:text-2xl text-white text-center">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <DeptHero
        title={event.eventname}
        imageSrc={event.imageUrl}
        imageAlt={`${event.eventname} Cover Image`}
        description="Computer Engineering Department Event"
      />

      {/* Featured Image Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12">
        <div className="relative aspect-[3/4] sm:aspect-[16/9] w-full max-w-3xl mx-auto rounded-lg sm:rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/900.jpg"
            alt="Event Featured Image"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            priority
          />
        </div>
      </div>

      {/* Event Details Section */}
      <section className="py-4 sm:py-6 lg:py-8 mb-8 sm:mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Date Card */}
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Date & Time</h3>
                <p className="text-gray-300 text-sm sm:text-base">{event.date}</p>
              </div>

              {/* Venue Card */}
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Venue</h3>
                <p className="text-gray-300 text-sm sm:text-base">{event.venue}</p>
              </div>

              {/* Registration Card */}
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Registration</h3>
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
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">About the Event</h2>
              <p className="text-gray-300 text-sm sm:text-base whitespace-pre-line">{event.fullDescription}</p>
            </div>

            {/* Schedule */}
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Event Schedule</h2>
              <div className="space-y-3 sm:space-y-4">
                {event.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-700 p-3 sm:p-4 rounded-lg"
                  >
                    <span className="text-gray-300 font-medium text-sm sm:text-base mb-1 sm:mb-0">{item.time}</span>
                    <span className="text-gray-300 text-sm sm:text-base">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordinators */}
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Event Coordinators</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {event.coordinators.map((coordinator, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-3 sm:p-4 rounded-lg"
                  >
                    <p className="text-white font-semibold text-sm sm:text-base mb-1">{coordinator.name}</p>
                    <p className="text-gray-300 text-sm sm:text-base">{coordinator.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EventPage;
