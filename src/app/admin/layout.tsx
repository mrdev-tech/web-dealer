'use client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col h-full shadow-2xl">
        <div className="h-16 flex items-center justify-center border-b border-gray-800">
          <span className="text-xl font-bold tracking-widest uppercase">Toyota Admin</span>
        </div>
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 mt-4">Dashboard</div>
          <Link href="/admin" className="block px-4 py-2 text-sm text-gray-300 rounded hover:bg-gray-800 hover:text-white transition">Overview</Link>
          
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 mt-6">CMS</div>
          <Link href="/admin/vehicles" className="block px-4 py-2 text-sm text-gray-300 rounded hover:bg-gray-800 hover:text-white transition">Manajemen Kendaraan</Link>
          <Link href="/admin/pricelist" className="block px-4 py-2 text-sm text-gray-300 rounded hover:bg-gray-800 hover:text-white transition">Update Pricelist OTR</Link>
          <Link href="/admin/promos" className="block px-4 py-2 text-sm text-gray-300 rounded hover:bg-gray-800 hover:text-white transition">Manajemen Promo</Link>
          <Link href="/admin/articles" className="block px-4 py-2 text-sm text-gray-300 rounded hover:bg-gray-800 hover:text-white transition">Manajemen Artikel</Link>

          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 mt-6">LMS</div>
          <Link href="/admin/leads" className="block px-4 py-2 text-sm text-gray-300 rounded hover:bg-gray-800 hover:text-white transition">Daftar Leads</Link>
          <Link href="/admin/trade-in" className="block px-4 py-2 text-sm text-gray-300 rounded hover:bg-gray-800 hover:text-white transition">Prospect Trade-In</Link>
          <Link href="/admin/bookings" className="block px-4 py-2 text-sm text-gray-300 rounded hover:bg-gray-800 hover:text-white transition">Service Bookings</Link>
        </div>
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="w-full bg-[#EB0A1E] text-white px-4 py-2 rounded text-sm font-bold hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-800">Control Panel</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-600">Admin User</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
