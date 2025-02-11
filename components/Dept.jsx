'use client';
import { motion } from "framer-motion";
import Card1 from "./Card1"; // Import the Card1 component

const Dept = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      {/* Main Title */}
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Launch Schedule
      </motion.h1>

      {/* Cards */}
      <div className="space-y-12">
        <Card1
          imageSrc="/ta.png"
          imageAlt="Description for Image 1"
          title="Computer Engineering"
        />
        <Card1
          imageSrc="/ta.png"
          imageAlt="Description for Image 2"
          title="Electrical Engineering"
        />
        <Card1
          imageSrc="/ta.png"
          imageAlt="Description for Image 3"
          title="Mechanical Engineering"
        />
        <Card1
          imageSrc="/ta.png"
          imageAlt="Description for Image 4"
          title="Civil Engineering"
        />
        <Card1
          imageSrc="/ta.png"
          imageAlt="Description for Image 5"
          title="Aerospace Engineering"
        />
      </div>
    </section>
  );
};

export default Dept;