'use client';

import { ReactLenis } from 'lenis/dist/lenis-react';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useRef } from 'react';

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Nav />
        <Hero />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-3 text-white sm:px-6 md:px-8 lg:px-12">
      <button
        onClick={() => {
          document.getElementById('launch-schedule')?.scrollIntoView({
            behavior: 'smooth',
          });
        }}
        className="flex items-center gap-1 text-xs sm:text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
      >
        EXPLORE EVENTS <FiArrowRight className="h-4 w-4" />
      </button>
    </nav>
  );
};

// Adjust section height for mobile
const SECTION_HEIGHT = {
  mobile: 1000,
  desktop: 1500,
};

const Hero = () => {
  return (
    <div 
      className="relative w-full"
      style={{ 
        height: `calc(${SECTION_HEIGHT.mobile}px + 100vh)`,
        '@media (min-width: 640px)': {
          height: `calc(${SECTION_HEIGHT.desktop}px + 100vh)`
        }
      }}
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-64 sm:h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT.mobile], [30, 0], {
    clamp: false,
  });
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT.mobile], [70, 100], {
    clamp: false,
  });

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY, 
    [0, SECTION_HEIGHT.mobile + 500], 
    ['200%', '120%']
  );
  const opacity = useTransform(
    scrollY, 
    [SECTION_HEIGHT.mobile, SECTION_HEIGHT.mobile + 500], 
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          'url(https://images.unsplash.com/photo-1555532538-dcdbd01d373d?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 pt-[150px] sm:pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="An example of a space launch"
        start={-100}
        end={100}
        className="w-1/2 sm:w-1/3 md:w-1/4"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="An example of a space launch"
        start={100}
        end={-150}
        className="mx-auto w-3/4 sm:w-2/3 md:w-1/2"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={-100}
        end={100}
        className="ml-auto w-1/2 sm:w-1/3 md:w-1/4"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={0}
        end={-300}
        className="ml-12 sm:ml-24 w-7/12 sm:w-5/12 md:w-1/3"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img 
      src={src} 
      alt={alt} 
      className={`${className} rounded-lg shadow-lg`} 
      ref={ref} 
      style={{ transform, opacity }} 
    />
  );
};

export default SmoothScrollHero;