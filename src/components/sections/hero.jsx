"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
];

export default function Hero({ id }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section id={id} className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <Image
  src={images[current]}
  alt="hero"
  fill
  priority
  className=" w-full  transition-opacity duration-700 mb-10"
/>
      {/* Overlay */}
      <div className="absolute inset-10 " />

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex items-end mb-10 px-6 md:px-16  md:pb-0">
        <div className="max-w-3xl text-white space-y-4">
          
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Bella Vista Extended Stay – Riverfront Homestay in Hoode, Udupi
          </h1>

          <p className="text-sm md:text-lg text-gray-200">
            Wake up to the beauty of the Bengre Backwaters.
          </p>

        </div>
      </div>

      {/* BUTTON → RIGHT BOTTOM */}
    {/* 📱 MOBILE → full width bottom */}
<div className="absolute bottom-0 left-0 w-full md:hidden z-20 ">
  <button className="w-full bg-[#10B981] text-white py-4 text-base font-medium">
    Contact Now
  </button>
</div>

{/* 🖥 TABLET + DESKTOP */}
<div className="hidden md:block absolute bottom-0 right-6 lg:right-12 z-20">
  <button
    className="bg-[#10B981] hover:bg-green-700 text-white 
    px-6 py-3 md:px-10 md:py-4 lg:px-40 lg:py-6
    text-sm md:text-lg lg:text-xl font-medium 
    shadow-lg transition 
    rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-none"
  >
    Contact Now
  </button>
</div>
    </section>
  );
}