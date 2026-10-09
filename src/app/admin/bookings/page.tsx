'use client';
import { useState } from 'react';

const MOCK_BOOKINGS = [
  {
    id: 'SB-001',
    customerName: 'Agus Pratama',
    phone: '081234567890',
    vehicle: 'Avanza 1.5 G',
    policeNumber: 'B 1234 XYZ',
    bookingDate: '15 Okt 2026 10:00',
    status: 'pending',
  },
  {
    id: 'SB-002',
    customerName: 'Rina Marlina',
    phone: '085798765432',
    vehicle: 'Rush 1.5 GR Sport',
    policeNumber: 'D 9876 ABC',
    bookingDate: '14 Okt 2026 13:00',
    status: 'confirmed',
  }
];

export default function BookingsAdminPage() {
  const [bookings, setBookings] = useState(MOCK_BOOKINGS);

  const handleStatusChange = (id: string, newStatus: string) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Service Bookings</h2>
          <p className="text-sm text-gray-500 mt-1">Kelola jadwal servis pelanggan ke bengkel resmi</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">ID Booking</th>
                <th className="px-6 py-4">Pelanggan</th>
                <th className="px-6 py-4">Kendaraan</th>
                <th className="px-6 py-4">Jadwal Servis</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">{booking.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-900">{booking.customerName}</div>
                    <div className="text-xs text-blue-600 mt-1">{booking.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-800">{booking.vehicle}</div>
                    <div className="text-xs text-gray-500 mt-1">{booking.policeNumber}</div>
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-800">{booking.bookingDate}</td>
                  <td className="px-6 py-4">
                    <select 
                      value={booking.status}
                      onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                      className={`text-xs font-bold px-2 py-1.5 rounded-md border-0 cursor-pointer ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'completed' ? 'bg-gray-800 text-white' :
                        booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      <option value="pending" className="bg-white text-black">Menunggu</option>
                      <option value="confirmed" className="bg-white text-black">Terkonfirmasi</option>
                      <option value="completed" className="bg-white text-black">Selesai</option>
                      <option value="cancelled" className="bg-white text-black">Batal</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <button className="text-blue-600 hover:underline font-medium">Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
