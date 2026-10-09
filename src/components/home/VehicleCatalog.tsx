'use client';
import { useState } from 'react';
import Link from 'next/link';

const DUMMY_VEHICLES = [
  { id: 1, name: "New Calya", category: "MPV", tags: ["GASOLINE"], price: "Rp170.700.000", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "All New Avanza", category: "MPV", tags: ["GASOLINE"], price: "Rp244.200.000", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "New Veloz Hybrid EV", category: "MPV", tags: ["ELECTRIFIED", "HEV"], price: "Rp303.000.000", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=400&auto=format&fit=crop" },
  { id: 4, name: "New Kijang Innova", category: "MPV", tags: ["DIESEL"], price: "Rp417.800.000", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400&auto=format&fit=crop" },
  { id: 5, name: "All New Kijang Innova Zenix", category: "MPV", tags: ["GASOLINE"], price: "Rp437.700.000", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&auto=format&fit=crop" },
  { id: 6, name: "All New Kijang Innova Zenix Hybrid EV", category: "MPV", tags: ["ELECTRIFIED", "HEV"], price: "Rp475.400.000", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=400&auto=format&fit=crop" },
];

const CATEGORIES = ["MPV", "SUV", "Hatchback", "Sedan", "Commercial"];
const SUBFILTERS = ["SEMUA", "ELECTRIFIED", "GR RACING"];

export default function VehicleCatalog() {
  const [activeCategory, setActiveCategory] = useState("MPV");
  const [activeSubFilter, setActiveSubFilter] = useState("SEMUA");

  const filteredVehicles = DUMMY_VEHICLES.filter(v => {
    const matchCategory = v.category === activeCategory;
    const matchSubFilter = activeSubFilter === "SEMUA" || v.tags.includes(activeSubFilter);
    return matchCategory && matchSubFilter;
  });

  return (
    <div className="w-full mx-auto py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-[#111]">Pilih Mobil</h2>
        <p className="text-sm text-gray-500 mt-2">Harga OTR Jakarta</p>
      </div>

      {/* Main Categories */}
      <div className="flex justify-center md:justify-between border-b border-gray-200 overflow-x-auto pb-0 w-full mb-4">
        <div className="flex space-x-12 px-4 md:w-full md:justify-around">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] md:text-[13px] font-bold uppercase pb-3 transition whitespace-nowrap border-b-[3px] ${
                activeCategory === cat 
                  ? "border-[#EB0A1E] text-black" 
                  : "border-transparent text-gray-400 hover:text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sub Filters */}
      <div className="flex space-x-6 mb-6 px-4">
        {SUBFILTERS.map(sub => (
          <button
            key={sub}
            onClick={() => setActiveSubFilter(sub)}
            className={`text-xs font-bold uppercase transition ${
              activeSubFilter === sub ? "text-black border-b border-black pb-1" : "text-gray-500 hover:text-black pb-1"
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredVehicles.map(vehicle => (
          <Link href={`/models/${vehicle.id}`} key={vehicle.id} className="block bg-white rounded-lg border border-gray-200 overflow-hidden group hover:shadow-lg hover:border-gray-300 transition duration-300">
            <div className="flex flex-row h-40 md:h-44 p-4 md:p-5 items-center">
              {/* Left Details */}
              <div className="w-1/2 pr-2 flex flex-col justify-center">
                <h3 className="text-sm md:text-base font-bold text-black mb-1 leading-tight">{vehicle.name}</h3>
                <p className="text-[10px] md:text-[11px] text-gray-500 mb-3">Mulai Dari <span className="font-semibold text-black">{vehicle.price}</span></p>
                <div className="flex flex-wrap gap-1">
                  {vehicle.tags.map(tag => (
                    <span key={tag} className={`text-[8px] md:text-[9px] font-semibold px-2 py-0.5 border rounded uppercase ${
                      tag === 'GASOLINE' || tag === 'DIESEL' ? 'border-gray-300 text-gray-600' : 
                      tag === 'ELECTRIFIED' ? 'border-blue-400 text-blue-600' :
                      tag === 'HEV' ? 'bg-blue-600 text-white border-transparent' :
                      'border-red-300 text-red-600'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Right Image */}
              <div className="w-1/2 h-full flex justify-end items-center relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="max-h-[110%] max-w-[120%] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300 transform translate-x-2" 
                />
              </div>
            </div>
          </Link>
        ))}
        {filteredVehicles.length === 0 && (
          <div className="col-span-3 text-center text-gray-500 py-12 text-sm">Belum ada kendaraan di kategori ini.</div>
        )}
      </div>
    </div>
  );
}
