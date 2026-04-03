"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const images = [
  "/images/g-1.png",
  "/images/g-2.png",
  "/images/g-3.png",
  "/images/g-4.png",
  "/images/g5.png",
  "/images/g-6.png",
  "/images/acc4.png",
  "/images/acc 6.png",
  "/images/acc 1.png",
  "/images/acc3.png",
  
];

export default function Gallery({ id }) {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id={id}  className="bg-[#f5f5f5] py-16 md:py-5">
      <div className="max-w-6xl mx-auto px-6">

        {/* ✅ HEADING */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#111827]">
              Gallery
            </h2>
            <div className="w-full h-0.75 bg-linear-to-r from-[#FFFFFF] to-[#10B981] mt-2 rounded-full"></div>
          </div>

          {/* SUBTEXT */}
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Take a glimpse of the peaceful riverfront experience waiting for you.
          </p>
        </div>

        {/* BIG IMAGE */}
        <div className="relative max-w-3xl mx-auto h-100 md:h-125 rounded-2xl overflow-hidden mb-8">
            <Image
                src={images[current]}
                alt="gallery"
                fill
                className="object-cover"
            />
            </div>

        {/* THUMBNAIL SLIDER */}
        <div className="relative flex items-center">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 bg-[#10B981] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          >
            ←
          </button>

          {/* THUMBNAILS */}
   <div
  ref={scrollRef}
  className="flex gap-4 overflow-x-auto px-12 no-scrollbar"
>
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`relative min-w-25 h-20 rounded-xl overflow-hidden cursor-pointer border-2 ${
                  current === index
                    ? "border-green-500"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 bg-[#10B981] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}