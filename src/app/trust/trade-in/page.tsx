'use client';
import { useState } from 'react';

export default function TradeInPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    oldBrand: '',
    oldModel: '',
    oldYear: '',
    oldTransmission: 'Matic',
    newToyota: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Ganti dengan nomor WhatsApp PIC Trade-In (Gunakan format 62...)
  const WA_PIC_NUMBER = "6281234567890"; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Di dunia nyata, di sini akan ada pemanggilan API ke backend (contoh: axios.post('/api/trade-in'))
    // Simulasi delay penyimpanan ke database
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);

      // Format Pesan WhatsApp
      const waText = `Halo Tim Toyota TRUST, saya berminat untuk melakukan Tukar Tambah (Trade-In).

*Data Diri:*
Nama: ${formData.name}
Kota: ${formData.city}

*Data Mobil Lama Saya:*
Merk & Model: ${formData.oldBrand} ${formData.oldModel}
Tahun: ${formData.oldYear}
Transmisi: ${formData.oldTransmission}

*Ingin Ditukar Dengan:*
Toyota ${formData.newToyota}

Mohon info estimasi harga mobil lama saya. Terima kasih.`;

      const encodedText = encodeURIComponent(waText);
      const waUrl = `https://wa.me/${WA_PIC_NUMBER}?text=${encodedText}`;

      // Buka WhatsApp di tab baru
      window.open(waUrl, '_blank');
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Banner / Header */}
      <div className="bg-[#EB0A1E] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Toyota TRUST Trade-In</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Tukar tambah mobil lama Anda (berbagai merk) dengan Toyota baru dengan mudah, aman, dan harga terbaik.
          </p>
        </div>
      </div>

      <div className="flex-grow max-w-3xl mx-auto w-full px-4 py-12">
        {success ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Permintaan Berhasil Terkirim!</h2>
            <p className="text-gray-600 mb-6">
              Data Anda telah tersimpan di sistem kami. Kami juga telah mengarahkan Anda ke WhatsApp PIC Trade-In kami.
            </p>
            <button 
              onClick={() => { setSuccess(false); setFormData({ name: '', phone: '', city: '', oldBrand: '', oldModel: '', oldYear: '', oldTransmission: 'Matic', newToyota: '' }); }}
              className="bg-gray-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-800"
            >
              Kirim Form Lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Data Diri Anda</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap <span className="text-red-500">*</span></label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#EB0A1E]" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nomor WhatsApp <span className="text-red-500">*</span></label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#EB0A1E]" placeholder="08..." />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Kota Domisili <span className="text-red-500">*</span></label>
                <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#EB0A1E]" placeholder="Contoh: Jakarta Selatan" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Data Mobil Lama (Yang Akan Dijual)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Merk Mobil <span className="text-red-500">*</span></label>
                <input required type="text" name="oldBrand" value={formData.oldBrand} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#EB0A1E]" placeholder="Contoh: Honda, Toyota, Suzuki" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tipe / Model <span className="text-red-500">*</span></label>
                <input required type="text" name="oldModel" value={formData.oldModel} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#EB0A1E]" placeholder="Contoh: Brio Satya E" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tahun Pembuatan <span className="text-red-500">*</span></label>
                <input required type="number" name="oldYear" value={formData.oldYear} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#EB0A1E]" placeholder="2018" min="2000" max="2026" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Transmisi <span className="text-red-500">*</span></label>
                <select name="oldTransmission" value={formData.oldTransmission} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#EB0A1E]">
                  <option value="Matic">Matic (AT / CVT)</option>
                  <option value="Manual">Manual (MT)</option>
                </select>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Mobil Incaran</h3>
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 mb-2">Model Toyota Baru yang Diinginkan <span className="text-red-500">*</span></label>
              <select required name="newToyota" value={formData.newToyota} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#EB0A1E]">
                <option value="">-- Pilih Kendaraan --</option>
                <option value="All New Avanza">All New Avanza</option>
                <option value="All New Veloz">All New Veloz</option>
                <option value="All New Yaris Cross">All New Yaris Cross</option>
                <option value="Kijang Innova Zenix">Kijang Innova Zenix</option>
                <option value="All New Agya">All New Agya</option>
                <option value="Fortuner">Fortuner</option>
                <option value="Raize">Raize</option>
              </select>
            </div>

            <div className="flex justify-end pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto bg-[#EB0A1E] text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Memproses..."
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Kirim & Chat WhatsApp
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              Dengan mengirimkan form ini, data prospek Anda akan tersimpan di sistem internal kami dan Anda akan dialihkan ke WhatsApp.
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
