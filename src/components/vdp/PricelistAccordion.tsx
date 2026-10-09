'use client';
import { useState } from 'react';
import Link from 'next/link';

const VARIANTS = [
  { name: '1.5 G M/T', price: 'Rp 239.700.000' },
  { name: '1.5 G CVT', price: 'Rp 254.100.000' },
  { name: '1.5 G CVT TSS', price: 'Rp 280.900.000' },
];

export default function PricelistAccordion() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="py-16 bg-white" id="price">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Harga OTR & Varian</h2>
        
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition"
          >
            <span className="text-lg font-bold text-gray-900">Daftar Harga OTR Jakarta</span>
            <span className="text-2xl text-gray-500">{isOpen ? '−' : '+'}</span>
          </button>
          
          {isOpen && (
            <div className="bg-white divide-y divide-gray-100">
              {VARIANTS.map((variant, idx) => (
                <div key={idx} className="p-6 flex flex-col sm:flex-row justify-between items-center hover:bg-red-50 transition">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-xl font-semibold text-gray-900">{variant.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">Transmisi: {variant.name.includes('M/T') ? 'Manual' : 'Automatic'}</p>
                  </div>
                  <div className="flex flex-col sm:items-end w-full sm:w-auto">
                    <span className="text-2xl font-bold text-[#EB0A1E] mb-2">{variant.price}</span>
                    <div className="flex space-x-2">
                      <Link href="/kredit" className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition">
                        Simulasi
                      </Link>
                      <Link href="https://wa.me/6281234567890" target="_blank" className="px-4 py-2 bg-[#EB0A1E] text-white text-sm font-medium rounded-lg hover:bg-red-700 transition">
                        Pesan
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
