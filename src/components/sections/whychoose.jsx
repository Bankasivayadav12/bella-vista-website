"use client";

import Image from "next/image";

const features = [
  {
    title: "Riverfront Location",
    desc: "Enjoy uninterrupted views of the beautiful Bengre backwaters.",
    img: "/images/why1.jpg",
    className: "md:col-span-2",
  },
  {
    title: "Perfect for Extended Stays",
    desc: "Fully furnished homestay ideal for short & long stays.",
    img: "/images/why2.jpg",
    className: "",
  },
  {
    title: "Close to Popular Attractions",
    desc: "Located just a short drive from Udupi’s famous tourist spots.",
    img: "/images/why3.jpg",
    className: "",
  },
  {
    title: "Peaceful & Private",
    desc: "A quiet retreat away from crowded tourist areas.",
    img: "/images/why4.jpg",
    className: "md:col-span-2",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔹 Heading */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Why Choose Bella Vista
            </h2>
            <div className="w-full h-0.75 bg-linear-to-r from-[#FFFFFF] to-[#10B981] mt-2 rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            A perfect blend of comfort, nature, and coastal charm
          </p>
        </div>

        {/* 🔹 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg  ${item.className}`}
            >
              {/* Image */}
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}