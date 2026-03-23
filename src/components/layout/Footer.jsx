import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer({id}) {
  return (
    <footer id={id} className="bg-[#ffffff] pt-26">

      {/* 🟩 Tagline */}
      <h2 className="text-center text-green-600 text-xl md:text-2xl font-medium mb-10 px-4">
        Escape the busy city life and enjoy the peaceful charm of the backwaters.
      </h2>

      {/* ⬜ FULL WIDTH CARD */}
      <div className="bg-[#eeeeee] rounded-t-[60px] px-6 md:px-16 py-10 md:py-14 flex flex-col md:flex-row gap-10 items-center md:items-start">

        {/* 🟨 LEFT */}
        <div className="flex-1 space-y-6">

          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Bella Vista"
            width={200}
            height={70}
          />

          {/* Description */}
          <p className="text-gray-600 text-[16px] leading-relaxed max-w-lg">
            Bella Vista Extended Stay offers a relaxing riverfront experience where comfort meets nature.
          </p>

          {/* Contact */}
          <div className="space-y-5 text-[16px] text-[#111827]">

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <span>+91 91870 89909</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-600 text-xl" />
              <span>Hoode, Near Bengre Backwaters, Udupi</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-600 text-xl" />
              <span>bellavistaextendedstay@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaInstagram className="text-green-600 text-xl" />
              <span>/ bellavistaextendedstay</span>
            </div>

          </div>

          {/* Social */}
          <div className="flex gap-4 pt-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
              <FaXTwitter />
            </div>
          </div>
        </div>

        {/* 🟦 RIGHT MAP */}
        
          <div className="">
            <Image
              src="/images/map.png"
              alt="map"
              width={600}
              height={400}
              className=""
            />
         
        </div>
      </div>

      {/* 🟩 Bottom Bar */}
      <div className="bg-green-600 text-white text-center py-3 text-sm">
        All Rights Reserved
      </div>

    </footer>
  );
}