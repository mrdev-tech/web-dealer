'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateArticlePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulasi delay penyimpanan API
    setTimeout(() => {
      setLoading(false);
      router.push('/admin/articles');
    }, 800);
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <Link href="/admin/articles" className="text-sm text-blue-600 hover:underline flex items-center mb-4">
          &larr; Kembali ke Daftar Artikel
        </Link>
        <h2 className="text-2xl font-bold text-gray-900">Tulis Artikel Baru</h2>
        <p className="text-sm text-gray-500 mt-1">Buat konten publikasi baru untuk ditampilkan di beranda.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <form onSubmit={handleSave} className="space-y-6">
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Judul Artikel <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              placeholder="Masukkan judul berita yang menarik..." 
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Kategori <span className="text-red-500">*</span></label>
              <select className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" required>
                <option value="">-- Pilih Kategori --</option>
                <option value="News & Event">News & Event</option>
                <option value="Insight">Insight</option>
                <option value="Electrified">Electrified</option>
                <option value="Gazoo Racing">Gazoo Racing</option>
                <option value="Tips">Tips</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Status Publikasi</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900">
                <option value="draft">Simpan sebagai Draft</option>
                <option value="published">Langsung Tayang (Published)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">URL Gambar Utama (Thumbnail)</label>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="https://example.com/image.jpg" 
                className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <button type="button" className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
                Browse...
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">Format disarankan: JPG/PNG landscape (16:9).</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Konten Artikel</label>
            {/* Simple text area for mock, in reality this would be a WYSIWYG editor like Quill or TinyMCE */}
            <textarea 
              rows={8}
              placeholder="Tulis isi artikel di sini..."
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              required
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-100">
            <Link 
              href="/admin/articles"
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-50 transition"
            >
              Batal
            </Link>
            <button 
              type="submit" 
              disabled={loading}
              className="px-6 py-2.5 bg-[#EB0A1E] text-white rounded-lg font-bold text-sm hover:bg-red-700 transition disabled:opacity-50"
            >
              {loading ? "Menyimpan..." : "Simpan Artikel"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
