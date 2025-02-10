'use client';

import React from 'react';
import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24 lg:py-48 text-white">
      <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-8">
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="flex items-center gap-2 md:gap-3"
        >
          <FiCpu className="h-5 w-5 md:h-6 md:w-6 text-zinc-500" />
          <p className="mb-1.5 text-xl font-bold text-zinc-50">
            Tech Conference 2024
          </p>
        </motion.div>

        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
          className="max-w-2xl text-3xl md:text-4xl lg:text-5xl font-black text-zinc-50"
        >
          A peek into the latest in tech
        </motion.h1>

        <motion.p
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
          className="max-w-xl text-base md:text-lg text-zinc-400"
        >
          Empower your potential at TechAura 2022, where tech meets tradition! Join MTI Thrissur from 
          February 9-11 to discover new opportunities, showcase your talents, and contribute to your growth.
        </motion.p>

        <motion.button
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.6 }}
          className="mt-2 md:mt-4 w-full md:w-auto rounded-lg bg-zinc-50 px-6 md:px-8 py-3 md:py-4 text-sm uppercase font-bold text-zinc-900 transition-colors hover:bg-zinc-200"
        >
          Don't miss the chance to unlock your skills!
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;