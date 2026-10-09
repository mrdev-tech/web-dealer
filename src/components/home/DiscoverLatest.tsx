'use client';
import { useState } from 'react';

const TABS = ["All", "News & Event", "Insight", "Electrified", "Gazoo Racing", "Tips"];

const NEWS = [
  {
    id: 1,
    title: "Bedah Masalah pada Kaca Mobil di Musim Kemarau",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Worry Free, Dapatkan Perlindungan Lebih Lama dari Toyota",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Salah Kaprah Menyalakan Lampu Hazard yang Masih Sering Terjadi",
    image: "https://images.unsplash.com/photo-1542228262-3d663bb907fc?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Waspada Debu Musim Kemarau Dapat Mengganggu Performa Mesin",
    image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=600&auto=format&fit=crop"
  }
];

export default function DiscoverLatest() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-white py-12 pb-24 border-t border-gray-100">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#111]">Discover The Latest</h2>
          
          <div className="flex justify-center border-b border-gray-200 mt-6 mx-auto w-full md:w-3/4">
            <div className="flex space-x-6 md:space-x-12 overflow-x-auto">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs md:text-sm font-semibold pb-3 transition whitespace-nowrap border-b-2 ${
                    activeTab === tab 
                      ? "border-[#EB0A1E] text-black" 
                      : "border-transparent text-gray-400 hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEWS.map(item => (
              <div key={item.id} className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#EB0A1E] transition leading-snug flex-grow mb-4">
                    {item.title}
                  </h3>
                  <div className="text-[10px] font-medium text-gray-500 flex items-center">
                    <span className="text-[#EB0A1E] uppercase tracking-wider">INSIGHT</span>
                    <span className="mx-1">•</span>
                    <span>17 Sep 2026</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Arrow (Decorative for desktop) */}
          <button className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow hover:shadow-md hover:border-gray-300 transition">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
        
        {/* Artikel Lain Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-2.5 border border-black rounded-full text-sm font-bold text-black hover:bg-black hover:text-white transition">
            Artikel Lain
          </button>
        </div>
      </div>
    </div>
  );
}
