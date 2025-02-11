"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBell } from "react-icons/fa";

export default function Card1({ imageSrc, imageAlt }) {
  const [isNotified, setIsNotified] = useState(false);
  return (
    <div className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden group">
      {/* Image */}
      <Image
        src={imageSrc} // Use imageSrc prop
        alt={imageAlt} // Use imageAlt prop
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        sizes="(max-width: 300px) 100vw, 300px"
        priority
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
        <p className="text-white/90 text-sm font-medium">Available soon</p>
        <button
          onClick={() => setIsNotified(!isNotified)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg
                        text-white font-medium text-sm hover:bg-white/20 transition-colors"
        >
          <FaBell className={`w-4 h-4 ${isNotified ? "fill-white" : ""}`} />
          {isNotified ? "Notified" : "Notify me"}
        </button>
      </div>
    </div>
  );
}