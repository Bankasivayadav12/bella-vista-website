import Image from "next/image";

const places = [
  { img: "/images/n1.png", title: "Malpe Beach", type: "wide" },
  { img: "/images/n2.png", title: "St. Mary's Island", type: "small" },
  { img: "/images/n3.png", title: "Udupi Sri Krishna Temple", type: "small" },
  { img: "/images/n4.png", title: "Delta Beach", type: "small" },
  { img: "/images/n5.png", title: "Malpe Sea Walk", type: "small" },
  { img: "/images/n6.png", title: "Bengre Backwaters", type: "wide" },
];

export default function NearbyAttractionsid ({id}) {
  return (
    <section id={id} className="bg-[#f5f5f5] py-26">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-10">
          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Nearby Attractions
            </h2>
            <div className="w-full h-0.75 bg-green-500 mt-2 rounded-full"></div>
          </div>

          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Discover beaches, temples, and scenic coastal experiences near Bella Vista.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {places.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden 
                ${item.type === "wide" ? "md:col-span-2 h-65" : "h-65"}`}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Title */}
              <div className="absolute bottom-4 left-4 text-white text-sm md:text-lg font-medium">
                {item.title}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}