"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Card1({ imageSrc, imageAlt, title }) {
  const [isNotified, setIsNotified] = useState(false);

  return (
    <div className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden group">
      {/* Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        sizes="(max-width: 300px) 100vw, 300px"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
        <p className="text-white/90 text-sm font-medium">{title}</p>
        <button
          onClick={() => setIsNotified(!isNotified)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg
                     text-white font-medium text-sm hover:bg-white/20 transition-colors"
        >
          <FaArrowRight className="w-4 h-4 fill-white" />
          Explore
        </button>
      </div>
    </div>
  );
}
