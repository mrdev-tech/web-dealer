'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, use } from 'react';

// Mock Data
const ARTICLE_DATA = [
  {
    id: 1,
    title: "Bedah Masalah pada Kaca Mobil di Musim Kemarau",
    category: "Insight",
    status: "published",
    content: "Isi konten artikel bedah masalah kaca mobil..."
  },
  {
    id: 2,
    title: "Worry Free, Dapatkan Perlindungan Lebih Lama dari Toyota",
    category: "News & Event",
    status: "published",
    content: "Isi konten perlindungan worry free..."
  },
  {
    id: 3,
    title: "Teknologi Hybrid Terbaru di Lini Gazoo Racing",
    category: "Gazoo Racing",
    status: "draft",
    content: "Isi konten tentang GR Hybrid..."
  }
];

export default function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('draft');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Cari data mock berdasarkan ID
    const article = ARTICLE_DATA.find(a => a.id.toString() === id);
    if (article) {
      setTitle(article.title);
      setCategory(article.category);
      setStatus(article.status);
      setContent(article.content);
    }
  }, [id]);

  const handleUpdate = (e: React.FormEvent) => {
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
        <h2 className="text-2xl font-bold text-gray-900">Edit Artikel</h2>
        <p className="text-sm text-gray-500 mt-1">Perbarui konten artikel ID: {id}</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <form onSubmit={handleUpdate} className="space-y-6">
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Judul Artikel <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Kategori <span className="text-red-500">*</span></label>
              <select 
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" 
                required
              >
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
              <select 
                value={status}
                onChange={e => setStatus(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
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
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Konten Artikel</label>
            <textarea 
              rows={8}
              value={content}
              onChange={e => setContent(e.target.value)}
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
              {loading ? "Menyimpan..." : "Perbarui Artikel"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
