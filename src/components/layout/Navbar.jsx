"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF] border-b border-[#d6d6d6]">
        <nav className="max-w-350 mx-auto 
        px-6 sm:px-8 md:px-12 lg:px-16 
        flex items-center justify-between h-16">

          {/* Logo */}
          <div
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer"
          >
            <Image
              src="/images/logo.png"
              alt="Bella Vista Logo"
              width={140}
              height={40}
              priority
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center 
          gap-2 lg:gap-4 
          text-[15px] font-normal text-[#000000]">
            {[
              { id: "about", label: "About Us" },
              { id: "accommodation", label: "Accommodation" },
              { id: "amenities", label: "Amenities" },
              { id: "nearby", label: "Nearby Attractions" },
              { id: "gallery", label: "Gallery" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer px-3 py-2 rounded-xl 
                transition-all duration-300 
                hover:bg-blue-500 hover:text-white"
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(true)}
          >
            ☰
          </div>
        </nav>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 
        transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} className="text-xl">
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-6 px-6 text-lg font-medium text-[#2b2b2b]">
          <p onClick={() => scrollToSection("about")} className="cursor-pointer">About Us</p>
          <p onClick={() => scrollToSection("accommodation")} className="cursor-pointer">Accommodation</p>
          <p onClick={() => scrollToSection("amenities")} className="cursor-pointer">Amenities</p>
          <p onClick={() => scrollToSection("nearby")} className="cursor-pointer">Nearby Attractions</p>
          <p onClick={() => scrollToSection("gallery")} className="cursor-pointer">Gallery</p>
          <p onClick={() => scrollToSection("contact")} className="cursor-pointer">Contact</p>
        </div>
      </div>
    </>
  );
}