'use client';
import { useState } from 'react';

export default function TestDrivePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Di Fase 4, ini akan melakukan POST ke API endpoint untuk tabel `leads`
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900">Booking Test Drive</h1>
          <p className="mt-4 text-gray-600">Rasakan langsung pengalaman berkendara dengan mobil Toyota pilihan Anda.</p>
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center animate-[fadeIn_0.5s_ease-in-out]">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-2">Permintaan Berhasil Dikirim!</h2>
            <p className="text-green-700">Tim Sales kami akan segera menghubungi Anda via WhatsApp untuk konfirmasi jadwal Test Drive.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Kirim Permintaan Lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EB0A1E] focus:border-[#EB0A1E]" placeholder="Budi Santoso" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp *</label>
                <input required type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EB0A1E] focus:border-[#EB0A1E]" placeholder="081234567890" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Mobil *</label>
                <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EB0A1E] focus:border-[#EB0A1E]">
                  <option value="">-- Silakan Pilih --</option>
                  <option value="avanza">All New Avanza</option>
                  <option value="veloz">All New Veloz</option>
                  <option value="zenix">Innova Zenix</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rencana Tanggal Test Drive *</label>
                <input required type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EB0A1E] focus:border-[#EB0A1E]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rencana Waktu</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EB0A1E] focus:border-[#EB0A1E]">
                  <option value="pagi">Pagi (09:00 - 12:00)</option>
                  <option value="siang">Siang (12:00 - 15:00)</option>
                  <option value="sore">Sore (15:00 - 17:00)</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full mt-8 bg-[#EB0A1E] text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-lg transform hover:-translate-y-1">
              Kirim Permintaan
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
