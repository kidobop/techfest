'use client';
import { motion } from 'framer-motion';
import Card1 from './Card1';
import Link from 'next/link';

const Dept = () => {
  const cardsData = [
    {
      imageSrc: '/900.jpg',
      imageAlt: 'Description for Image 1',
      title: 'Computer Engineering',
      href: '/dept/computer-engineering',
    },
    {
      imageSrc: '/900.jpg',
      imageAlt: 'Description for Image 2',
      title: 'Electrical Engineering',
      href: '/dept/electrical-engineering',
    },
    {
      imageSrc: '/900.jpg',
      imageAlt: 'Description for Image 3',
      title: 'Mechanical Engineering',
      href: '/dept/mechanical-engineering',
    },
    {
      imageSrc: '/900.jpg',
      imageAlt: 'Description for Image 4',
      title: 'Civil Engineering',
      href: '/dept/civil-engineering',
    },
    {
      imageSrc: '/900.jpg',
      imageAlt: 'Description for Image 5',
      title: 'Electronics Engineering',
      href: '/dept/electronics-engineering',
    },
  ];

  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-24 text-white min-h-screen flex flex-col items-center justify-center"
    >
      {/* Main Title */}
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="mb-12 text-4xl font-black uppercase text-zinc-50 text-center"
      >
        Department Events
      </motion.h1>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {cardsData.map((card, index) => (
          <Link key={index} href={card.href}>
            {/* No need for <a> tag here, Link automatically renders it */}
            <Card1
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Dept;
