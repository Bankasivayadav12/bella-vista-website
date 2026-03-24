import Image from "next/image";

const leftData = {
  title: "About Bella Vista",
  desc: "Located in the calm coastal village of Hoode near Bengre Backwaters, Bella Vista Extended Stay offers a relaxing homestay experience surrounded by nature. Designed for comfort and privacy, it is perfect for family vacations, weekend getaways, and extended stays in Udupi.",
  image: "/images/about.jpg",
  caption: "Peaceful riverfront retreat",
};

const rightImages = [
  {
    img: "/images/about1.jpg",
    text: "Located in Hoode near Bengre Backwaters",
  },
  {
    img: "/images/about2.jpg",
    text: "Perfect for family vacations and long stays",
  },
  {
    img: "/images/about4.png",
    text: "Close to Udupi city & Malpe Beach",
    tall: true,
  },
];

export default function About({ id }) {
  return (
    <section id={id} className=" py-26">
    
      <div className="max-w-8xl mx-auto px-6 md:px-36">

        <div className="grid md:grid-cols-2 gap-12">

          {/* 🟨 LEFT SECTION */}
          <div className="flex flex-col gap-10">

            {/* TEXT */}
            <div>
              <div className="inline-block mb-3">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#000000]">
                  {leftData.title}
                </h2>
                <div className="w-full h-0.75 bg-linear-to-r from-[#FFFFFF] to-[#10B981] mt-2 rounded-full"></div>
              </div>

              <p className="text-[#000000] text-sm md:text-base leading-relaxed max-w-md">
                {leftData.desc}
              </p>
            </div>

            {/* SMALL IMAGE */}
            <div className="relative h-50 rounded-2xl overflow-hidden">
              <Image
                src={leftData.image}
                alt=""
                fill
                className="object-cover"
              />

              {/* ✅ BIGGER OVERLAY */}
              <div className="absolute inset-0  flex items-end p-5">
                <p className="text-[#FFFFFF] text-sm">
                  {leftData.caption}
                </p>
              </div>
            </div>

          </div>

          {/* 🟦 RIGHT SECTION */}
          <div className="grid grid-cols-2 gap-6">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-6">
              {rightImages.slice(0, 2).map((item, i) => (
                <div key={i} className="relative h-50 rounded-2xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className="object-cover"
                  />

                  {/* ✅ BIGGER OVERLAY */}
                  <div className="absolute inset-0  flex items-end p-5">
                    <p className="text-[#FFFFFF] text-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT TALL IMAGE */}
            <div className="relative rounded-2xl overflow-hidden min-h-105">
              <Image
                src={rightImages[2].img}
                alt=""
                fill
                className="object-cover"
              />

              {/* ✅ BIGGER OVERLAY */}
              <div className="absolute inset-0  flex items-end p-6">
                <p className="text-white  text-sm">
                  {rightImages[2].text}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}