'use client';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fcfcfc] border-t border-gray-200">
      {/* Back to top section */}
      <div className="border-b border-gray-200 text-center relative h-12 flex items-center justify-center bg-white">
        <button 
          onClick={scrollToTop}
          className="text-xs font-semibold text-gray-600 flex items-center space-x-2 hover:text-[#EB0A1E] transition"
        >
          <span>Kembali Ke Atas</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
        </button>
      </div>

      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 py-12">
        {/* Accordion/Columns (Styling mimics the screenshot dropdowns) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 px-4">
          <div className="flex justify-between items-center border-b border-gray-100 pb-2 md:border-none md:pb-0">
            <span className="text-[11px] font-bold text-gray-800 tracking-wide">Lebih dari Solusi</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          <div className="flex justify-between items-center border-b border-gray-100 pb-2 md:border-none md:pb-0">
            <span className="text-[11px] font-bold text-gray-800 tracking-wide">Lebih dari Pengalaman</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          <div className="flex justify-between items-center border-b border-gray-100 pb-2 md:border-none md:pb-0">
            <span className="text-[11px] font-bold text-gray-800 tracking-wide">Lebih dari Teknologi</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          <div className="flex justify-between items-center pb-2 md:border-none md:pb-0">
            <span className="text-[11px] font-bold text-gray-800 tracking-wide">Lainnya</span>
            {/* The screenshot shows 'Lainnya' without a chevron */}
          </div>
        </div>

        {/* Social Media & Customer Care */}
        <div className="flex flex-col items-center mb-12">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-6">
            <Link href="#" className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition">
              <span className="font-bold text-[12px] uppercase">X</span>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.97-.48 3.96-1.52 5.61-1.05 1.64-2.65 2.92-4.52 3.52-1.89.6-3.95.66-5.87.1-1.92-.54-3.6-1.69-4.78-3.23-1.19-1.55-1.82-3.46-1.78-5.41.04-1.94.75-3.83 2-5.32 1.26-1.49 3.03-2.45 4.96-2.69 1.93-.25 3.91.13 5.56 1.1v4.32c-.75-.49-1.61-.74-2.5-.75-.89-.01-1.78.23-2.52.7-.75.47-1.34 1.16-1.66 2-.32.83-.37 1.73-.13 2.59.25.85.76 1.6 1.45 2.13.7.53 1.55.8 2.43.78.88-.02 1.73-.34 2.4-.9.68-.56 1.13-1.33 1.28-2.2.14-.85.05-1.72-.25-2.52V.02z"/></svg>
            </Link>
          </div>
          
          {/* TOYOTA CUSTOMER CARE LOGO PLACEHOLDER */}
          <div className="flex items-center space-x-2 text-black font-extrabold tracking-widest text-lg">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m-3 0h3m-3 0v-3m0 3v3m0-3h-3m10 6A9 9 0 113 12a9 9 0 0118 0z"></path></svg>
            <div className="flex flex-col">
              <span className="text-[14px] leading-none mb-1">TOYOTA</span>
              <span className="text-[#EB0A1E] text-[15px] leading-none">CUSTOMER CARE</span>
            </div>
          </div>
        </div>
        
        {/* Separator Line */}
        <div className="border-t border-gray-200 mb-6 w-full max-w-4xl mx-auto"></div>
        
        {/* Copyright */}
        <div className="text-center text-[10px] text-gray-500 space-y-2">
          <p>&copy; 2026 PT. Toyota-Astra Motor</p>
          <p>Seluruh Informasi Hanya Berlaku Untuk Kendaraan Di Indonesia.</p>
          <div className="flex justify-center space-x-2 mt-2">
            <Link href="#" className="hover:text-gray-900 transition">Kebijakan Privasi</Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-900 transition">Legal Cookie</Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-900 transition">Hubungi Kami</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
