"use client";

import Image from "next/image";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer({ id }) {
  return (
    <footer id={id} className="bg-white pt-10 md:pt-10 lg:pt-10">
      {/* 🟩 Tagline */}
      <h2 className="text-center text-[#10B981] text-lg sm:text-xl md:text-2xl font-medium mb-8 md:mb-10 px-4">
        Escape the busy city life and enjoy the peaceful charm of the
        backwaters.
      </h2>

      {/* ⬜ MAIN CARD */}
      <div
        className="bg-[#929292]/10 rounded-t-[40px] md:rounded-t-[60px] 
      px-5 sm:px-8 md:px-16 py-8 md:py-12 lg:py-14 
      flex flex-col lg:flex-row gap-5 lg:gap-10 items-start"
      >
        {/* 🟨 LEFT SECTION */}
        <div className="flex-1 space-y-6 w-full">
          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Bella Vista"
            width={180}
            height={60}
            className="w-35 sm:w-40 md:w-45 h-auto"
          />

          {/* Description */}
          <p className="text-[#000000] text-sm sm:text-base leading-relaxed ">
            Bella Vista Extended Stay offers a relaxing riverfront experience
            where comfort meets nature.
          </p>

          {/* Contact */}
          <div className="space-y-4 text-sm sm:text-base text-[#111827]">
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#10B981] text-lg mt-1" />
              <span className="text-[#000000]">+91 91870 89909</span>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#10B981] text-lg mt-1" />
              <span className="text-[#000000]">
                BellaVista Extended stay, #17/17, Padu Thonse, Bengre.
                <br />
                Udupi District - 576115, Karnataka, India
              </span>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#10B981] text-lg mt-1" />
              <span className="text-[#000000]">
                bellavistaextendedstay@gmail.com
              </span>
            </div>

            {/* Instagram */}
            <a
              href="https://instagram.com/bellavistaextendedstay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-green-700 transition" >
              <FaInstagram className="text-[#10B981] text-lg" />
              <span>/ bellavistaextendedstay</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 pt-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black text-white cursor-pointer">
              <FaXTwitter />
            </div>
          </div>
        </div>

        {/* 🟦 RIGHT MAP */}
        <div className="w-full lg:w-[50%]">
          <div className="w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?output=embed&q=13.423189163208008,74.69575500488281"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* 🟩 Bottom Bar */}
      <div className="bg-[#10B981] text-white text-center py-3 text-xs sm:text-sm">
        © 2026 Bella Vista Extended Stay. All Rights Reserved.
      </div>
    </footer>
  );
}
