import About from "@/components/sections/about";
import Accommodation from "@/components/sections/accommodation";
import Hero from "@/components/sections/hero";
import Amenities from "@/components/sections/amenities";
import NearbyAttractions from "@/components/sections/nearby";
import Gallery from "@/components/sections/gallery";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-white">
        <Hero id="hero" />
        <About id="about" />
        <Accommodation id="accommodation" />
        <Amenities id="amenities" />
        <NearbyAttractions id="nearby" />
        <Gallery id="gallery" />
        <Footer id="contact"/>
    </div>
  );
}