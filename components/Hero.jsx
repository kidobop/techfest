"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Responsive Image with Glow */}
        <motion.div
          className="mb-4 w-[50vw] h-[50vw] max-w-[300px] max-h-[300px] relative image-glow" // Reduced margin-bottom to mb-4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/ta.png" // Replace with your image path
            alt="Tech Aura Logo"
            layout="fill"
            objectFit="contain"
            className="rounded-full" // Optional: Makes the image circular
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tech <span className="glow">AURA</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="max-w-[600px] text-lg text-gray-400 sm:text-xl mt-4" // Added margin-top for spacing
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Unleash your potential at Tech Aura 2025. Join us on Feb 24-25 to dive
          into groundbreaking technology, celebrate creativity, and build a
          brighter future. Unlock your potential and be part of the change!
        </motion.p>
      </div>

      {/* CSS for Glow Effects */}
      <style jsx>{`
        @keyframes subtleGlow {
          0% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
              0 0 10px rgba(255, 255, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.7),
              0 0 15px rgba(255, 255, 255, 0.7);
          }
          100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
              0 0 10px rgba(255, 255, 255, 0.5);
          }
        }

        .glow {
          animation: subtleGlow 2s ease-in-out infinite;
        }

        /* Glow Effect for Image */
        @keyframes imageSubtleGlow {
          0% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
              0 0 10px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.7),
              0 0 15px rgba(255, 255, 255, 0.7);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
              0 0 10px rgba(255, 255, 255, 0.5);
          }
        }

        .image-glow {
          animation: imageSubtleGlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}