import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const FullscreenImageSection = ({ imageUrl, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Featured Image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12">
        <div
          className="relative aspect-[3/4] sm:aspect-[16/9] w-full max-w-3xl mx-auto rounded-lg sm:rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:opacity-95 transition-opacity"
          onClick={openModal}
        >
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            priority
          />
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white p-2 hover:bg-gray-800 rounded-full transition-colors z-[60]"
            aria-label="Close modal"
          >
            <IoClose size={24} />
          </button>

          <div className="w-full h-full relative">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FullscreenImageSection;
