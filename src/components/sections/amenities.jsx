import Image from "next/image";

const amenities = [
  { icon: "/icons/a_icon1.png", title: "Air Conditioned Rooms" },
  { icon: "/icons/a_icon2.png", title: "Fully Furnished Homestay" },
  { icon: "/icons/a_icon3.png", title: "Equipped Kitchen" },
  { icon: "/icons/a_icon4.png", title: "Riverfront Balconies" },
  { icon: "/icons/a_icon5.png", title: "Parking Facility" },
  { icon: "/icons/a_icon6.png", title: "High-Speed Wi-Fi" },
  { icon: "/icons/a_icon7.png", title: "Peaceful Environment" },
  { icon: "/icons/a_icon8.png", title: "Ideal for Families & Groups" },
]

export default function Amenities({ id }) {
  return (
    <section id={id} className="bg-[#E6F1ED] py-26">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Facilities & Amenities
            </h2>
            <div className="w-full h-[3px] bg-green-500 mt-2 rounded-full"></div>
          </div>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Modern facilities designed for a relaxing and hassle-free stay.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm 
                         border-b-4 border-r-4 border-green-500 
                         hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                />
              </div>

              {/* Title */}
              <p className="text-sm font-medium text-gray-800">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}