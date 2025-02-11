'use client';
import { motion } from "framer-motion";
import Card1 from "./Card1";

const Dept = () => {
  const cardsData = [
    {
      imageSrc: "/900.jpg",
      imageAlt: "Description for Image 1",
      title: "Computer Engineering",
    },
    {
      imageSrc: "/900.jpg",
      imageAlt: "Description for Image 2",
      title: "Electrical Engineering",
    },
    {
      imageSrc: "/900.jpg",
      imageAlt: "Description for Image 3",
      title: "Mechanical Engineering",
    },
    {
      imageSrc: "/900.jpg",
      imageAlt: "Description for Image 4",
      title: "Civil Engineering",
    },
    {
      imageSrc: "/900.jpg",
      imageAlt: "Description for Image 5",
      title: "Aerospace Engineering",
    },
  ];

  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-24 text-white"
    >
      {/* Main Title */}
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-12 text-4xl font-black uppercase text-zinc-50 text-center"
      >
        Department Events
      </motion.h1>
      {/* Cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.slice(0, 3).map((card, index) => (
            <Card1
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cardsData.slice(3).map((card, index) => (
            <Card1
              key={index + 3}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dept;
