import React from "react";

export default function Location() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24 text-white">
      <h1 className="mb-12 text-3xl sm:text-4xl font-bold uppercase text-zinc-50 text-center">
        Location
      </h1>

      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7845.220652413859!2d76.21198959357913!3d10.531326200000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee5256ead4f5%3A0x561f76122d6724e6!2sMaharaja&#39;s%20Technological%20Institute%20(MTI)!5e0!3m2!1sen!2sin!4v1739717859909!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px] sm:h-[500px] lg:h-[600px]"
        />
      </div>
    </section>
  );
}
