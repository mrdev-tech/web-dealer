'use client';
import { useState } from 'react';

const DUMMY_COLORS = [
  { name: 'Platinum White Pearl', hex: '#f0f0f0', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop' },
  { name: 'Attitude Black', hex: '#111111', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?q=80&w=800&auto=format&fit=crop' },
  { name: 'Silver Metallic', hex: '#c0c0c0', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dark Red Mica', hex: '#8b0000', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop' },
];

export default function ColorVisualizer() {
  const [activeColor, setActiveColor] = useState(DUMMY_COLORS[0]);

  return (
    <div className="py-12 bg-white" id="color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Pilihan Warna</h2>
        <div className="relative w-full h-[300px] md:h-[500px] mb-8 bg-gray-50 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
          {/* We use key to force re-render and animation on image change */}
          <img 
            key={activeColor.name}
            src={activeColor.image} 
            alt={`Warna ${activeColor.name}`} 
            className="max-h-full object-contain animate-[fadeIn_0.5s_ease-in-out]" 
          />
        </div>
        
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold text-gray-700 mb-4">{activeColor.name}</p>
          <div className="flex space-x-4">
            {DUMMY_COLORS.map((color) => (
              <button
                key={color.name}
                onClick={() => setActiveColor(color)}
                className={`w-10 h-10 rounded-full border-2 transition-transform transform hover:scale-110 ${
                  activeColor.name === color.name ? 'border-[#EB0A1E] ring-2 ring-red-300 ring-offset-2' : 'border-gray-300 shadow-sm'
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Pilih warna ${color.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
