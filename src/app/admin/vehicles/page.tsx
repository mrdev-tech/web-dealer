export default function VehiclesAdminPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manajemen Kendaraan</h2>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition">
          + Tambah Kendaraan
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <input 
            type="text" 
            placeholder="Cari mobil..." 
            className="p-2 border border-gray-300 rounded-md text-sm w-64 focus:outline-none focus:border-gray-500"
          />
          <select className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-500">
            <option>Semua Kategori</option>
            <option>MPV</option>
            <option>SUV</option>
          </select>
        </div>
        
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4">Nama Model</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4">Jumlah Varian</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-bold text-gray-900">All New Avanza</td>
              <td className="px-6 py-4">MPV</td>
              <td className="px-6 py-4">2 Varian</td>
              <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-medium">Aktif</span></td>
              <td className="px-6 py-4 text-right space-x-3">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Hapus</button>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-bold text-gray-900">All New Veloz</td>
              <td className="px-6 py-4">MPV</td>
              <td className="px-6 py-4">3 Varian</td>
              <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-medium">Aktif</span></td>
              <td className="px-6 py-4 text-right space-x-3">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Hapus</button>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-bold text-gray-900">Innova Zenix</td>
              <td className="px-6 py-4">SUV</td>
              <td className="px-6 py-4">4 Varian</td>
              <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-medium">Aktif</span></td>
              <td className="px-6 py-4 text-right space-x-3">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
