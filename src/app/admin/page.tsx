export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500 mb-1">Total Leads (Bulan Ini)</p>
          <p className="text-3xl font-extrabold text-gray-900">142</p>
          <p className="text-xs text-green-600 mt-2 font-medium">↑ 12% dari bulan lalu</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500 mb-1">Total SPK</p>
          <p className="text-3xl font-extrabold text-gray-900">28</p>
          <p className="text-xs text-green-600 mt-2 font-medium">↑ 5% dari bulan lalu</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500 mb-1">Service Bookings</p>
          <p className="text-3xl font-extrabold text-gray-900">56</p>
          <p className="text-xs text-gray-400 mt-2 font-medium">Menunggu konfirmasi: 12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500 mb-1">Total Kendaraan Aktif</p>
          <p className="text-3xl font-extrabold text-gray-900">24</p>
          <p className="text-xs text-gray-400 mt-2 font-medium">Terakhir diupdate: Hari ini</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads Table Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Leads Terbaru</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Nama Customer</th>
                  <th className="px-4 py-3">Kendaraan</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium text-gray-900">Budi Santoso</td>
                  <td className="px-4 py-3">All New Veloz</td>
                  <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">New</span></td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium text-gray-900">Andi Hermawan</td>
                  <td className="px-4 py-3">Innova Zenix</td>
                  <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Follow Up</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sales Performance Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Performa Sales (Top 3)</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">Reza (Sales Exec)</p>
                <p className="text-xs text-gray-500">12 SPK Bulan ini</p>
              </div>
              <span className="font-bold text-[#EB0A1E]">1st</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">Dina (Sales Exec)</p>
                <p className="text-xs text-gray-500">9 SPK Bulan ini</p>
              </div>
              <span className="font-bold text-gray-500">2nd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
