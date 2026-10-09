'use client';
import { useState } from 'react';

export default function BookingServicePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Di Fase 4, ini akan melakukan POST ke API endpoint untuk tabel `service_bookings`
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900">Booking Service Online</h1>
          <p className="mt-4 text-gray-600">Jadwalkan perawatan rutin kendaraan Toyota Anda tanpa perlu antre panjang.</p>
        </div>

        {isSubmitted ? (
          <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-xl p-8 text-center animate-[fadeIn_0.5s_ease-in-out]">
            <div className="text-5xl mb-4">🛠️</div>
            <h2 className="text-2xl font-bold mb-2">Booking Berhasil Dicatat!</h2>
            <p className="text-blue-700">Admin Bengkel kami akan segera mengkonfirmasi ketersediaan slot waktu Anda.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Booking Baru
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EB0A1E] focus:border-[#EB0A1E]" placeholder="Nama Sesuai STNK" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp *</label>
                <input required type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EB0A1E] focus:border-[#EB0A1E]" placeholder="081234567890" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model Kendaraan *</label>
                <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EB0A1E] focus:border-[#EB0A1E]" placeholder="Misal: Kijang Innova 2018" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Polisi (Plat) *</label>
                <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EB0A1E] focus:border-[#EB0A1E]" placeholder="B 1234 ABC" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Service *</label>
                <input required type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EB0A1E] focus:border-[#EB0A1E]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Service</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EB0A1E] focus:border-[#EB0A1E]">
                  <option value="berkala">Service Berkala (10.000 KM, dll)</option>
                  <option value="keluhan">Pemeriksaan Keluhan Umum</option>
                  <option value="body-paint">Perbaikan Body & Cat</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Keluhan Tambahan (Opsional)</label>
                <textarea rows={3} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EB0A1E] focus:border-[#EB0A1E]" placeholder="Rem terasa bunyi saat diinjak..."></textarea>
              </div>
            </div>
            <button type="submit" className="w-full mt-8 bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition shadow-lg transform hover:-translate-y-1">
              Konfirmasi Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
