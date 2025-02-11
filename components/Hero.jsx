"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-6 text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tech <span className="glow">AURA</span>
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-lg text-gray-400 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Visual Artist & Creative Director
        </motion.p>
      </div>
      <style jsx>{`
        @keyframes subtleGlow {
          0% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 15px rgba(255, 255, 255, 0.7);
          }
          100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5);
          }
        }
        .glow {
          animation: subtleGlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
