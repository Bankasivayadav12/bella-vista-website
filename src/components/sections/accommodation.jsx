"use client";

import Image from "next/image";

function ImageCard({ img, text, position = "bottom" }) {
  return (
    <div className="group flex flex-col items-center">

      {/* TOP CARD */}
      {position === "top" && (
        <div className="mb-4 w-full opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="bg-[#8EC5B8] text-black text-sm text-center py-3 rounded-2xl shadow-md">
            {text}
          </div>
        </div>
      )}

      {/* IMAGE */}
      <div className="relative w-full h-62.5 rounded-2xl overflow-hidden">
        <Image
          src={img}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* BOTTOM CARD */}
      {position === "bottom" && (
        <div className="mt-4 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="bg-[#8EC5B8] text-black text-sm text-center py-3 rounded-2xl shadow-md">
            {text}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Accommodation({ id }){
  return (
     <section id={id} className="bg-white mb-10 -md:py-10">

    
    
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          
           <div className="inline-block mb-3">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111827] text-center">
                    Our Accommodation
                </h2>

                <div className="w-full h-0.75 bg-linear-to-r from-[#FFFFFF] to-[#10B981] mt-2 rounded-full"></div>
                </div>

          <p className="text-[#000000] mt-3 max-w-2xl mx-auto text-sm">
            Bella Vista Extended Stay offers five beautifully designed air-conditioned rooms with modern interiors, attached bathrooms, and private balconies overlooking the river.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10">
            <ImageCard
              img="/images/acc 1.png"
              text="5 Spacious Air Conditioned Rooms"
              position="bottom"
            />
            <ImageCard
              img="/images/acc 2.png"
              text="Relaxing balcony views"
              position="bottom"
            />
          </div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col gap-10 mt-10">
            <ImageCard
              img="/images/acc3.png"
              text="Comfortable beds"
              position="top"
            />
            <ImageCard
              img="/images/acc4.png"
              text="Modern interiors"
              position="top"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-10">
            <ImageCard
              img="/images/acc5.png"
              text="Attached bathrooms"
              position="bottom"
            />
            <ImageCard
              img="/images/acc 6.png"
              text="Fun water activities"
              position="bottom"
            />
          </div>

        </div>
      </div>
    </section>
  );
}