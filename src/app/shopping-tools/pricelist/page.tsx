'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CARS_DATA = [
  { id: '1', name: 'New Calya', price: 'Rp170.700.000', image: 'https://toyota.astra.co.id/sites/default/files/2022-08/1_calya_black.png', category: 'MPV', isElectrified: false, isGR: false },
  { 
    id: '2', 
    name: 'All New Avanza', 
    price: 'Rp244.200.000', 
    image: 'https://toyota.astra.co.id/sites/default/files/2021-11/1-avanza-purplish-silver.png', 
    category: 'MPV', 
    isElectrified: false, 
    isGR: false,
    variants: [
      { name: '1.3 E M/T', price: 'Rp244.200.000' },
      { name: '1.3 E CVT', price: 'Rp259.200.000' },
      { name: '1.5 G M/T', price: 'Rp267.300.000' },
      { name: '1.5 G CVT', price: 'Rp282.100.000' },
    ]
  },
  { id: '3', name: 'New Veloz Hybrid EV', price: 'Rp303.000.000', image: 'https://toyota.astra.co.id/sites/default/files/2021-11/1-veloz-platinum-white-pearl.png', category: 'MPV', isElectrified: true, isGR: false },
  { id: '4', name: 'New Kijang Innova', price: 'Rp417.800.000', image: 'https://toyota.astra.co.id/sites/default/files/2021-08/1_innova_super-white.png', category: 'MPV', isElectrified: false, isGR: false },
  { id: '5', name: 'All New Kijang Innova Zenix', price: 'Rp437.700.000', image: 'https://toyota.astra.co.id/sites/default/files/2022-11/1_Innova%20Zenix_Attitude%20Black.png', category: 'MPV', isElectrified: false, isGR: false },
  { id: '6', name: 'All New Kijang Innova Zenix Hybrid EV', price: 'Rp475.400.000', image: 'https://toyota.astra.co.id/sites/default/files/2022-11/1_Innova%20Zenix%20Hybrid_Platinum%20White%20Pearl.png', category: 'MPV', isElectrified: true, isGR: false },
  { id: '7', name: 'All New Voxy', price: 'Rp632.700.000', image: 'https://toyota.astra.co.id/sites/default/files/2022-02/1-voxy-sparkling-black-pearl.png', category: 'MPV', isElectrified: false, isGR: false },
  { id: '8', name: 'New Alphard HEV', price: 'Rp1.388.000.000', image: 'https://toyota.astra.co.id/sites/default/files/2023-08/1_alphard-platinum-white-pearl.png', category: 'MPV', isElectrified: true, isGR: false },
];

export default function PricelistPage() {
  const [activeCategory, setActiveCategory] = useState('MPV');
  const [activeFilter, setActiveFilter] = useState('SEMUA');
  const [expandedCarId, setExpandedCarId] = useState<string | null>(null);

  const categories = ['MPV', 'SUV', 'Hatchback', 'Sedan', 'Commercial'];
  const filters = ['SEMUA', 'ELECTRIFIED', 'GR RACING'];

  const filteredCars = CARS_DATA.filter(car => {
    const matchCategory = car.category === activeCategory;
    let matchFilter = true;
    if (activeFilter === 'ELECTRIFIED') matchFilter = car.isElectrified;
    if (activeFilter === 'GR RACING') matchFilter = car.isGR;
    return matchCategory && matchFilter;
  });

  // Untuk memastikan panel muncul setelah akhir baris (tergantung ukuran layar, anggap 3 kolom untuk lg)
  // Pada implementasi sederhana, kita bisa merender panel menggunakan col-span-1 md:col-span-2 lg:col-span-3
  // Tapi untuk memastikan ia berada di bawah baris yang tepat tanpa merusak susunan baris, 
  // kita kelompokkan mobil per baris. Namun Tailwind grid + col-span-full otomatis mem-break baris.
  // Jika ditaruh setelah elemen yang diklik, elemen berikutnya akan turun.
  // Cara termudah yang persis seperti desain: kita sisipkan panel *setelah* elemen terakhir di baris yang sama.

  const renderGridWithExpansion = () => {
    const elements = [];
    const columns = 3; // Asumsikan desktop 3 kolom
    
    for (let i = 0; i < filteredCars.length; i++) {
      const car = filteredCars[i];
      const isExpanded = expandedCarId === car.id;
      
      elements.push(
        <div 
          key={car.id} 
          onClick={() => setExpandedCarId(isExpanded ? null : car.id)}
          className={`border rounded-lg p-5 flex flex-col relative hover:shadow-lg transition cursor-pointer group bg-white ${isExpanded ? 'border-[#EB0A1E] shadow-md' : 'border-gray-200'}`}
        >
          <h3 className="font-bold text-gray-900 text-[15px] mb-4 w-3/4 leading-snug">{car.name}</h3>
          
          <div className="mt-auto z-10 relative">
            <span className="text-[11px] text-gray-500 block mb-1">Mulai Dari</span>
            <div className="flex items-center">
              <span className={`font-bold text-lg transition ${isExpanded ? 'text-[#EB0A1E]' : 'text-gray-900 group-hover:text-[#EB0A1E]'}`}>{car.price}</span>
              <svg className={`w-4 h-4 ml-2 text-[#EB0A1E] transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <div className="absolute right-2 bottom-4 w-40 h-24">
            <Image 
              src={car.image} 
              alt={car.name} 
              fill 
              className="object-contain"
              sizes="160px"
              unoptimized
            />
          </div>
        </div>
      );

      // Cek apakah mobil ini yang di-expand, dan kita perlu tahu kapan merender panelnya.
      // Panel dirender di akhir baris ini.
      const isLastInRow = (i + 1) % columns === 0 || i === filteredCars.length - 1;
      const rowStartIndex = Math.floor(i / columns) * columns;
      const rowEndIndex = Math.min(rowStartIndex + columns - 1, filteredCars.length - 1);
      
      // Jika kita berada di akhir baris, dan ada mobil di baris ini yang expanded
      const expandedCarInThisRow = filteredCars.slice(rowStartIndex, rowEndIndex + 1).find(c => c.id === expandedCarId);
      
      if (isLastInRow && expandedCarInThisRow) {
        const variants = expandedCarInThisRow.variants || [
          { name: '1.3 E M/T', price: expandedCarInThisRow.price },
          { name: '1.5 G M/T', price: 'Rp267.300.000' }
        ];

        elements.push(
          <div key={`expanded-${expandedCarInThisRow.id}`} className="col-span-1 md:col-span-2 lg:col-span-3 mt-2 mb-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#EB0A1E] text-white">
                  <tr>
                    <th className="px-6 py-3 font-bold w-1/2">Tipe</th>
                    <th className="px-6 py-3 font-bold w-1/2">Harga</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {variants.map((v, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-bold text-gray-800">{v.name}</td>
                      <td className="px-6 py-4 font-bold text-gray-800">{v.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center space-x-4 p-6 bg-white border-t border-gray-100">
                <button className="bg-[#EB0A1E] text-white px-8 py-2.5 rounded text-sm font-bold hover:bg-red-700 transition flex items-center shadow-sm">
                  Dapatkan Penawaran
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                </button>
                <button className="bg-white text-gray-800 border border-gray-300 px-8 py-2.5 rounded text-sm font-bold hover:bg-gray-50 transition flex items-center shadow-sm">
                  E-Brosur
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                </button>
              </div>
            </div>
          </div>
        );
      }
    }
    
    return elements;
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Daftar Harga</h1>
          <h2 className="text-xl text-gray-600 mb-1">Harga OTR Jakarta</h2>
          <h3 className="text-lg text-gray-600 mb-6">Per 01 Juli 2026</h3>
          <p className="text-xs text-gray-400">
            *Harga Jual Ditetapkan Masing-masing Outlet<br/>
            *Untuk Informasi Harga Terkini Dapat Menghubungi Dealer Toyota Terdekat Anda
          </p>
        </div>

        {/* Main Categories Tabs */}
        <div className="flex justify-between border-b-2 border-gray-100 mb-6">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => { setActiveCategory(cat); setExpandedCarId(null); }}
              className={`pb-4 px-4 font-bold text-sm uppercase tracking-wider transition relative ${
                activeCategory === cat ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <div className="absolute bottom-[-2px] left-0 w-full h-1 bg-[#EB0A1E]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Sub Filters (SEMUA, ELECTRIFIED, GR RACING) */}
        <div className="flex space-x-6 mb-8 items-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setExpandedCarId(null); }}
              className={`text-xs font-bold tracking-widest uppercase transition ${
                activeFilter === filter ? 'text-black border-b border-black pb-1' : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              {filter === 'GR RACING' ? (
                <span className="flex items-center">
                  <span className="bg-black text-white text-[10px] px-1 mr-1 italic font-extrabold">GR</span>
                  RACING
                </span>
              ) : (
                filter
              )}
            </button>
          ))}
        </div>

        {/* Grid Cars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {renderGridWithExpansion()}
        </div>
        
        {/* Back to Top */}
        <div className="flex justify-center border-t border-gray-200 pt-8">
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center text-sm font-bold text-gray-600 hover:text-[#EB0A1E]">
            Kembali Ke Atas
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
          </button>
        </div>

      </div>
    </div>
  );
}
