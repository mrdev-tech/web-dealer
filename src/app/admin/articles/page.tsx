'use client';
import { useState } from 'react';

// Mock Data
const ARTICLE_DATA = [
  {
    id: 1,
    title: "Bedah Masalah pada Kaca Mobil di Musim Kemarau",
    category: "Insight",
    date: "17 Sep 2026",
    status: "Published",
  },
  {
    id: 2,
    title: "Worry Free, Dapatkan Perlindungan Lebih Lama dari Toyota",
    category: "News & Event",
    date: "15 Sep 2026",
    status: "Published",
  },
  {
    id: 3,
    title: "Teknologi Hybrid Terbaru di Lini Gazoo Racing",
    category: "Gazoo Racing",
    date: "10 Sep 2026",
    status: "Draft",
  }
];

import Link from 'next/link';

export default function ArticlesAdminPage() {
  const [data, setData] = useState(ARTICLE_DATA);

  const handleDelete = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
      setData(data.filter(item => item.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Manajemen Artikel</h2>
          <p className="text-sm text-gray-500 mt-1">Kelola konten berita untuk seksi "Discover The Latest"</p>
        </div>
        <Link href="/admin/articles/create" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition flex items-center">
          + Tulis Artikel Baru
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <input 
            type="text" 
            placeholder="Cari judul artikel..." 
            className="p-2 border border-gray-300 rounded-md text-sm w-64 focus:outline-none focus:border-gray-500"
          />
          <select className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-500">
            <option>Semua Kategori</option>
            <option>News & Event</option>
            <option>Insight</option>
            <option>Electrified</option>
            <option>Gazoo Racing</option>
            <option>Tips</option>
          </select>
        </div>
        
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4">Judul Artikel</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4">Tanggal Tayang</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((article) => (
              <tr key={article.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-bold text-gray-900 w-1/3">{article.title}</td>
                <td className="px-6 py-4 font-medium">
                  <span className="text-[#EB0A1E] uppercase text-xs tracking-wider">{article.category}</span>
                </td>
                <td className="px-6 py-4">{article.date}</td>
                <td className="px-6 py-4">
                  {article.status === "Published" ? (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-medium">Tayang</span>
                  ) : (
                    <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded font-medium">Draft</span>
                  )}
                </td>
                <td className="px-6 py-4 text-right space-x-3">
                  <Link href={`/admin/articles/${article.id}`} className="text-blue-600 hover:underline font-medium">Edit</Link>
                  <button onClick={() => handleDelete(article.id)} className="text-red-600 hover:underline font-medium">Hapus</button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-400">Tidak ada artikel ditemukan.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
