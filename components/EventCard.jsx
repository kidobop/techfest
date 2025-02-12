// EventCard.jsx
"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const EventCard = ({ eventname, description, date, imageUrl, registerUrl }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-sm"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isHovered ? "none" : "transform 0.5s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={`w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden ${
          isHovered ? "shadow-2xl shadow-purple-500/20" : ""
        } transition-shadow duration-300`}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl || "/placeholder-event.jpg"}
            alt={eventname}
            fill
            className={`object-cover ${
              isHovered ? "scale-110" : "scale-100"
            } transition-transform duration-300 ease-out`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-50" />
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 text-xs font-medium text-purple-400 bg-purple-400/10 backdrop-blur-sm rounded-full">
              {date}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-white">{eventname}</h3>
          <p className="text-sm text-zinc-400 line-clamp-3">{description}</p>
          <div className="pt-2">
            <a
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/20 ${
                isHovered
                  ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-zinc-800 text-zinc-300"
              }`}
            >
              Register
            </a>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 -z-10 rounded-xl transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-xl ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: "translateZ(-10px)",
        }}
      />
    </div>
  );
};

export default EventCard;
