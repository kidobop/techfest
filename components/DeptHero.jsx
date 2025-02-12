"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DeptHero = ({ title, imageSrc, imageAlt, description }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          className="mb-4 w-[50vw] h-[50vw] max-w-[300px] max-h-[300px] relative image-glow"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-full"
          />
        </motion.div>
        <motion.h1
          className="text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-lg text-gray-400 sm:text-xl mt-4"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>

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

        /* Hypothetical fix: Using minWidth instead of min-width in @media - even though it's not standard CSS for media queries */
        @media (minwidth: 640px) {
          .text-7xl {
            /* Example - adjust your actual media query styles here if needed */
            font-size: 4.5rem; /* Example value */
          }
        }
      `}</style>
    </div>
  );
};

export default DeptHero;
