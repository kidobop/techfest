'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image'; // Import the Image component from next/image

const EventCard = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    setTilt({
      x: (deltaY / card.height) * 10, // Adjusting the tilt intensity
      y: -(deltaX / card.width) * 10,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className="w-full max-w-sm overflow-hidden rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 relative group"
      whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
      style={{
        perspective: '1000px',
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.2s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src="/api/placeholder/400/250"
          alt="Event thumbnail"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-4 text-xl font-bold text-zinc-50">TechAura 2024</h3>
        <div className="space-y-3 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <FiCalendar className="h-4 w-4" />
            <span>February 9-11, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="h-4 w-4" />
            <span>9:00 AM - 5:00 PM</span>
          </div>
        </div>
        <motion.a
          href="#register"
          whileHover={{ x: 4 }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-50"
        >
          Register Now
          <FiArrowRight className="h-4 w-4" />
        </motion.a>
      </div>

      {/* 3D Hover Glow Effect */}
      <div
        className={`absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-zinc-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isHovered ? 'animate-glow' : ''
        }`}
      ></div>
      <div
        className={`absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isHovered ? 'animate-glow' : ''
        }`}
      ></div>
      <div
        className={`absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-zinc-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isHovered ? 'animate-glow' : ''
        }`}
      ></div>
      <div
        className={`absolute inset-0 pointer-events-none bg-gradient-to-l from-transparent via-zinc-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isHovered ? 'animate-glow' : ''
        }`}
      ></div>
    </motion.div>
  );
};

export default EventCard;
