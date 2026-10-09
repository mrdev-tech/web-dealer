'use client';
import { useState } from 'react';

export default function KonsultasiPembelianPage() {
  const [formData, setFormData] = useState({
    kebutuhan: 'individu',
    infoSpesifikasi: 'beli',
    waktuPembelian: '< 1 Minggu',
    nama: '',
    alamat: '',
    noHandphone: '',
    email: '',
    kota: '',
    dealer: '',
    product: '',
    pertanyaan: '',
    consent1: false,
    consent2: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-12 border-b pb-4">Konsultasi Pembelian</h1>

        {isSuccess ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center my-12">
             <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
             </div>
             <h2 className="text-2xl font-bold text-gray-900 mb-2">Pesan Berhasil Terkirim!</h2>
             <p className="text-gray-600 mb-6">
               Terima kasih atas ketertarikan Anda. Tim representatif kami akan segera menghubungi Anda.
             </p>
             <button 
               onClick={() => setIsSuccess(false)}
               className="bg-gray-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-800 transition"
             >
               Kirim Form Lain
             </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Kebutuhan */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Kebutuhan</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="kebutuhan" value="individu" checked={formData.kebutuhan === 'individu'} onChange={handleChange} className="w-4 h-4 text-[#EB0A1E] border-gray-300 focus:ring-[#EB0A1E]" />
                    <span className="text-sm text-gray-700">Individu</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="kebutuhan" value="fleet" checked={formData.kebutuhan === 'fleet'} onChange={handleChange} className="w-4 h-4 text-[#EB0A1E] border-gray-300 focus:ring-[#EB0A1E]" />
                    <span className="text-sm text-gray-700">Fleet</span>
                  </label>
                </div>
              </div>

              {/* Informasi Produk & Spesifikasi */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3 border-t pt-4">Informasi Produk & Spesifikasi</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="infoSpesifikasi" value="beli" checked={formData.infoSpesifikasi === 'beli'} onChange={handleChange} className="w-4 h-4 text-[#EB0A1E] border-gray-300 focus:ring-[#EB0A1E]" />
                    <span className="text-sm text-gray-700">Beli</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="infoSpesifikasi" value="promo" checked={formData.infoSpesifikasi === 'promo'} onChange={handleChange} className="w-4 h-4 text-[#EB0A1E] border-gray-300 focus:ring-[#EB0A1E]" />
                    <span className="text-sm text-gray-700">Info Promo Pembelian</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="infoSpesifikasi" value="produk" checked={formData.infoSpesifikasi === 'produk'} onChange={handleChange} className="w-4 h-4 text-[#EB0A1E] border-gray-300 focus:ring-[#EB0A1E]" />
                    <span className="text-sm text-gray-700">Info Produk dan Spesifikasi</span>
                  </label>
                </div>
              </div>

              {/* Waktu perkiraan pembelian mobil */}
              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-3 border-t pt-4">Waktu perkiraan pembelian mobil</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="waktuPembelian" value="< 1 Minggu" checked={formData.waktuPembelian === '< 1 Minggu'} onChange={handleChange} className="w-4 h-4 text-[#EB0A1E] border-gray-300 focus:ring-[#EB0A1E]" />
                    <span className="text-sm text-gray-700">&lt; 1 Minggu</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="waktuPembelian" value="1 Minggu - 1 Bulan" checked={formData.waktuPembelian === '1 Minggu - 1 Bulan'} onChange={handleChange} className="w-4 h-4 text-[#EB0A1E] border-gray-300 focus:ring-[#EB0A1E]" />
                    <span className="text-sm text-gray-700">1 Minggu - 1 Bulan</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="waktuPembelian" value="> 1 Bulan" checked={formData.waktuPembelian === '> 1 Bulan'} onChange={handleChange} className="w-4 h-4 text-[#EB0A1E] border-gray-300 focus:ring-[#EB0A1E]" />
                    <span className="text-sm text-gray-700">&gt; 1 Bulan</span>
                  </label>
                </div>
              </div>

              {/* Customer Care Contact Info */}
              <div className="pt-8 mt-8 border-t">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer care</h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  PT. Toyota-Astra Motor<br />
                  Jl. Laksda Yos Sudarso, Sunter II<br />
                  Jakarta 14330
                </p>
                <div className="text-xs text-gray-800 font-bold mb-4">
                  Layanan 24 Jam<br />
                  Telp: <span className="text-blue-600 font-normal">1500 315</span><br />
                  Email: <a href="mailto:customer.care@toyota.astra.co.id" className="text-blue-600 underline font-normal">customer.care@toyota.astra.co.id</a>
                </div>
                
                {/* Dummy Toyota Customer Care Logo */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-red-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 4.5 2 7.5C2 10.5 6.48 13 12 13C17.52 13 22 10.5 22 7.5C22 4.5 17.52 2 12 2ZM12 11.5C7.58 11.5 4 9.71 4 7.5C4 5.29 7.58 3.5 12 3.5C16.42 3.5 20 5.29 20 7.5C20 9.71 16.42 11.5 12 11.5Z"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-tight text-red-600 uppercase">Toyota</span>
                    <span className="text-sm font-bold tracking-tight text-red-600 uppercase">Customer Care</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="lg:col-span-8 space-y-5">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Informasi Data Pribadi</h3>
              
              <div>
                <input required type="text" name="nama" value={formData.nama} onChange={handleChange} placeholder="Nama*" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>
              
              <div>
                <input type="text" name="alamat" value={formData.alamat} onChange={handleChange} placeholder="Alamat" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>

              <div>
                <input required type="tel" name="noHandphone" value={formData.noHandphone} onChange={handleChange} placeholder="No Handphone*" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                <p className="text-[10px] text-gray-400 mt-1">Format nomor telepon 08xxx</p>
              </div>

              <div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Alamat Email" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>

              <div>
                <input required type="text" name="kota" value={formData.kota} onChange={handleChange} placeholder="Kota*" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                <p className="text-[10px] text-gray-400 mt-1 leading-tight">Pelanggan dipersilakan memilih kota berdasarkan hasil pencarian yang dilakukan dengan mempertimbangkan radius terdekat dari preferensi lokasinya.</p>
              </div>

              <div>
                <input required type="text" name="dealer" value={formData.dealer} onChange={handleChange} placeholder="Dealer*" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                <p className="text-[10px] text-gray-400 mt-1 leading-tight">Pelanggan dipersilakan memilih dealer berdasarkan hasil pencarian yang dilakukan dengan mempertimbangkan radius terdekat dari preferensi lokasinya.</p>
              </div>

              <div>
                <select name="product" value={formData.product} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-sm text-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                  <option value="">Product</option>
                  <option value="Avanza">Avanza</option>
                  <option value="Innova">Innova</option>
                  <option value="Fortuner">Fortuner</option>
                </select>
              </div>

              <div>
                <textarea name="pertanyaan" value={formData.pertanyaan} onChange={handleChange} rows={5} placeholder="Pertanyaan" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y"></textarea>
              </div>

              <div className="space-y-3 pt-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input required type="checkbox" name="consent1" checked={formData.consent1} onChange={handleChange} className="mt-1 w-4 h-4 text-[#EB0A1E] border-gray-300 rounded focus:ring-[#EB0A1E]" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    Dengan mencentang kotak ini, Saya memberikan persetujuan kepada Dealer dan Distributor untuk mengumpulkan, mengolah, menyimpan, mengirim dan memusnahkan data pribadi Saya untuk mendapatkan seluruh layanan sesuai yang tercantum pada <a href="#" className="text-blue-500 underline">Kebijakan Privasi</a> Laman Situs Website Toyota.
                  </span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input required type="checkbox" name="consent2" checked={formData.consent2} onChange={handleChange} className="mt-1 w-4 h-4 text-[#EB0A1E] border-gray-300 rounded focus:ring-[#EB0A1E]" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    Saya telah membaca dan menyetujui isi <a href="#" className="text-blue-500 underline">Kebijakan Privasi</a> Laman Situs Website Toyota ini.
                  </span>
                </label>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#38d1f1] text-white px-8 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-cyan-500 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>

            </div>

          </form>
        )}

        {/* Back to Top */}
        <div className="flex justify-center border-t border-gray-200 mt-16 pt-8">
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center text-xs font-bold text-gray-600 hover:text-black">
            Kembali Ke Atas
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
          </button>
        </div>

      </div>
    </div>
  );
}
