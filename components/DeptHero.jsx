"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DeptHero = ({ title, imageSrc, imageAlt, description }) => {
  return (
    <div className="relative w-full overflow-hidden pb-16 pt-24">
      {" "}
      {/* Changed from h-screen to specific padding */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          className="mb-4 w-[40vw] h-[40vw] max-w-[200px] max-h-[200px] relative image-glow"
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
          className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="max-w-[500px] text-base text-gray-400 sm:text-lg mt-3"
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

        @media (min-width: 640px) {
          /* Fixed minwidth to min-width */
          .text-5xl {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DeptHero;
