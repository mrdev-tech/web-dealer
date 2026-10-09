'use client';
import { useState, useEffect } from 'react';

const BANNERS = [
  {
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1920&auto=format&fit=crop",
    title: "ALL NEW",
    model: "LAND CRUISER FJ",
    tagline: "YOUR FREEDOM AND JOY",
  },
  {
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1920&auto=format&fit=crop",
    title: "ALL NEW",
    model: "YARIS CROSS",
    tagline: "AWAKEN YOUR TRUE SELF",
  },
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] bg-black overflow-hidden group">
      {BANNERS.map((banner, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image - Clean, no heavy overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${banner.image}')` }}
          >
            {/* Gradient at the bottom for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          
          {/* Text Content matching the TAM style */}
          <div className="absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center text-center px-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-[0.2em] mb-1">
              {banner.title}
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wide mb-2 uppercase">
              {banner.model}
            </h1>
            <p className="text-2xl md:text-4xl text-gray-200 font-light tracking-[0.3em] uppercase">
              {banner.tagline}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/80 text-white p-2 rounded transition opacity-0 group-hover:opacity-100">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/80 text-white p-2 rounded transition opacity-0 group-hover:opacity-100">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
      
      {/* Small Promo Widget on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col bg-black text-white w-40 text-center cursor-pointer hover:bg-gray-900 transition border border-gray-800">
        <div className="h-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=300&auto=format&fit=crop')" }}></div>
        <div className="p-3">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">New</p>
          <p className="text-xs font-bold my-1">VELOZ HYBRID EV</p>
          <div className="bg-white text-black text-[10px] font-bold py-1 mt-2">PESAN SEKARANG</div>
          <div className="bg-black text-white text-[10px] border border-white py-1 mt-1">Jelajahi Sekarang</div>
        </div>
      </div>
    </div>
  );
}
