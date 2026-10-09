import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* Toyota Logo SVG Placeholder (simplified) */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 4.5 2 7.5C2 10.5 6.48 13 12 13C17.52 13 22 10.5 22 7.5C22 4.5 17.52 2 12 2ZM12 11.5C7.58 11.5 4 9.71 4 7.5C4 5.29 7.58 3.5 12 3.5C16.42 3.5 20 5.29 20 7.5C20 9.71 16.42 11.5 12 11.5Z" fill="#EB0A1E"/>
                <path d="M12 3.5C9.24 3.5 7 5.29 7 7.5C7 9.71 9.24 11.5 12 11.5C14.76 11.5 17 9.71 17 7.5C17 5.29 14.76 3.5 12 3.5ZM12 10.5C9.79 10.5 8 9.16 8 7.5C8 5.84 9.79 4.5 12 4.5C14.21 4.5 16 5.84 16 7.5C16 9.16 14.21 10.5 12 10.5Z" fill="#EB0A1E"/>
                <path d="M12 4.5C11.17 4.5 10.5 5.84 10.5 7.5C10.5 9.16 11.17 10.5 12 10.5C12.83 10.5 13.5 9.16 13.5 7.5C13.5 5.84 12.83 4.5 12 4.5Z" fill="#EB0A1E"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold leading-tight tracking-wider text-black">LET'S</span>
                <span className="text-[10px] font-bold leading-tight tracking-wider text-black">GO</span>
                <span className="text-[10px] font-bold leading-tight tracking-wider text-black">BEYOND</span>
              </div>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="https://itstimeforeveryone.toyota.astra.co.id/" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-gray-800 hover:text-[#EB0A1E] transition">Toyota Electrified</Link>
            <Link href="https://gazooracing.toyota.astra.co.id/" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-gray-800 hover:text-[#EB0A1E] transition">Gazoo Racing</Link>
            
            <button className="flex items-center text-[13px] font-bold text-gray-800 hover:text-[#EB0A1E] transition group">
              Models
              <svg className="w-4 h-4 ml-1 text-gray-500 group-hover:text-[#EB0A1E] transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="group h-16 flex items-center">
              <button className="flex items-center text-[13px] font-bold text-gray-800 hover:text-[#EB0A1E] transition">
                Shop Now
                <svg className="w-4 h-4 ml-1 text-gray-500 group-hover:text-[#EB0A1E] transition-transform group-hover:-rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              {/* Mega Menu Dropdown */}
              <div className="absolute top-[64px] left-0 w-full bg-white border-t border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
                <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 grid grid-cols-12 gap-8 max-w-screen-2xl">
                  
                  {/* Column 1: Grid Icons (Daftar Harga, dll) */}
                  <div className="col-span-5 grid grid-cols-2 gap-4">
                    <Link href="/shopping-tools/pricelist" className="flex flex-col items-center justify-center p-6 border border-transparent hover:border-gray-200 hover:shadow-sm rounded-xl transition group/item relative">
                      <svg className="w-10 h-10 text-gray-700 group-hover/item:text-[#EB0A1E] transition mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17h6m-3-3v6m5-13h-4.586a1 1 0 01-.707-.293l-4.414-4.414A1 1 0 0010.586 5H4a2 2 0 00-2 2v10a2 2 0 002 2h2m10-10a2 2 0 00-2-2h-3m3 2v8m-10 0a2 2 0 002 2h2m4-2a2 2 0 01-2 2h-2m-4-2H6"></path></svg>
                      <span className="text-sm font-bold text-gray-800">Daftar Harga</span>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover/item:text-[#EB0A1E] opacity-0 group-hover/item:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                    <Link href="https://www.toyota.astra.co.id/spektakuler" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 border border-transparent hover:border-gray-200 hover:shadow-sm rounded-xl transition group/item relative">
                      <svg className="w-10 h-10 text-gray-700 group-hover/item:text-[#EB0A1E] transition mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                      <span className="text-sm font-bold text-gray-800">Spektakuler</span>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover/item:text-[#EB0A1E] opacity-0 group-hover/item:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                    <Link href="/shopping-tools/konsultasi-pembelian" className="flex flex-col items-center justify-center p-6 border border-transparent hover:border-gray-200 hover:shadow-sm rounded-xl transition group/item relative">
                      <svg className="w-10 h-10 text-gray-700 group-hover/item:text-[#EB0A1E] transition mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                      <span className="text-sm font-bold text-gray-800">Formulir Pertanyaan</span>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover/item:text-[#EB0A1E] opacity-0 group-hover/item:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                    <Link href="https://www.toyota.astra.co.id/shopping-tools/e-brochure" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 border border-transparent hover:border-gray-200 hover:shadow-sm rounded-xl transition group/item relative">
                      <svg className="w-10 h-10 text-gray-700 group-hover/item:text-[#EB0A1E] transition mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                      <span className="text-sm font-bold text-gray-800">E-Brosur</span>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover/item:text-[#EB0A1E] opacity-0 group-hover/item:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                  </div>

                  {/* Column 2: List of Links */}
                  <div className="col-span-4 border-l border-gray-100 pl-8 space-y-4">
                    <Link href="https://www.toyota.astra.co.id/shopping-tools/vehicle-comparison" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-gray-600 hover:text-[#EB0A1E] transition group/link">
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover/link:text-[#EB0A1E] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                      Bandingkan Mobil
                    </Link>
                    <Link href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-[#EB0A1E] transition group/link">
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover/link:text-[#EB0A1E] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Dapatkan Penawaran
                    </Link>
                    <Link href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-[#EB0A1E] transition group/link">
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover/link:text-[#EB0A1E] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      Test Drive
                    </Link>
                    <Link href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-[#EB0A1E] transition group/link">
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover/link:text-[#EB0A1E] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                      Simulasi Finansial
                    </Link>
                    <Link href="/trust/trade-in" className="flex items-center text-sm font-medium text-gray-600 hover:text-[#EB0A1E] transition group/link">
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover/link:text-[#EB0A1E] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                      Trade-In
                    </Link>
                    <Link href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-[#EB0A1E] transition group/link">
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover/link:text-[#EB0A1E] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2-1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                      Buat Mobil Impian
                    </Link>
                    <Link href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-[#EB0A1E] transition group/link">
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover/link:text-[#EB0A1E] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                      Katalog Opsi Kustomisasi Toyota
                    </Link>
                  </div>

                  {/* Column 3: Brand Services */}
                  <div className="col-span-3 border-l border-gray-100 pl-8 space-y-6">
                    <Link href="#" className="flex items-center text-sm font-bold text-gray-600 hover:text-[#EB0A1E] transition group/link uppercase tracking-wider">
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover/link:text-[#EB0A1E] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                      KINTO
                    </Link>
                    <Link href="#" className="flex items-center text-sm font-bold text-gray-600 hover:text-[#EB0A1E] transition group/link uppercase tracking-wider">
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover/link:text-[#EB0A1E] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      MODA
                    </Link>
                    <Link href="#" className="flex items-center text-sm font-bold text-gray-600 hover:text-[#EB0A1E] transition group/link uppercase tracking-wider">
                      <svg className="w-5 h-5 mr-3 text-[#EB0A1E]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      TARRA
                    </Link>
                  </div>
                  
                </div>
              </div>
            </div>
            <button className="flex items-center text-[13px] font-bold text-gray-800 hover:text-[#EB0A1E] transition group">
              Ownership
              <svg className="w-4 h-4 ml-1 text-gray-500 group-hover:text-[#EB0A1E] transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="relative group py-2">
              <button className="flex items-center text-[13px] font-bold text-gray-800 hover:text-[#EB0A1E] transition group">
                Toyota TRUST
                <svg className="w-4 h-4 ml-1 text-gray-500 group-hover:text-[#EB0A1E] transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute top-full left-0 w-60 bg-white border border-gray-100 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <Link href="/trust/trade-in" className="block px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[#EB0A1E] border-b border-gray-50">Trade-In (Tukar Tambah)</Link>
                <Link href="/trust/used-cars" className="block px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[#EB0A1E]">Lihat Stock Mobil Bekas</Link>
              </div>
            </div>
            <button className="flex items-center text-[13px] font-bold text-gray-800 hover:text-[#EB0A1E] transition group">
              Discover Toyota
              <svg className="w-4 h-4 ml-1 text-gray-500 group-hover:text-[#EB0A1E] transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-5">
            {/* Search Icon */}
            <button className="text-gray-800 hover:text-[#EB0A1E] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            
            {/* Location & Lang */}
            <div className="flex items-center text-[13px] font-bold text-gray-800 space-x-1 cursor-pointer hover:text-[#EB0A1E] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <div className="flex items-center">
                <span className="text-[#EB0A1E]">ID</span>
                <span className="mx-1 text-gray-300">|</span>
                <span className="text-gray-400">EN</span>
              </div>
            </div>

            {/* Login Button Pill */}
            <Link href="/login" className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-1.5 hover:border-gray-800 transition">
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <span className="text-[13px] font-bold text-gray-800">Login</span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
