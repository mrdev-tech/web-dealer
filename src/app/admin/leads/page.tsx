'use client';
import { useState } from 'react';

const MOCK_LEADS = [
  {
    id: 'L-001',
    customerName: 'Budi Santoso',
    phone: '081234567890',
    source: 'Form Test Drive',
    vehicle: 'All New Avanza',
    assignedTo: '-',
    status: 'new',
    date: '10 Okt 2026 09:15',
  },
  {
    id: 'L-002',
    customerName: 'Andi Hermawan',
    phone: '085712341234',
    source: 'Simulasi Kredit',
    vehicle: 'Innova Zenix',
    assignedTo: 'Reza (Sales)',
    status: 'follow_up',
    date: '09 Okt 2026 14:30',
  },
  {
    id: 'L-003',
    customerName: 'Siti Aminah',
    phone: '081198765432',
    source: 'WhatsApp',
    vehicle: 'Yaris Cross',
    assignedTo: 'Dina (Sales)',
    status: 'spk',
    date: '08 Okt 2026 10:00',
  }
];

const STATUS_OPTIONS = [
  { value: 'new', label: 'New Lead', color: 'bg-blue-100 text-blue-800' },
  { value: 'follow_up', label: 'Follow Up', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'visit', label: 'Visit / Test Drive', color: 'bg-purple-100 text-purple-800' },
  { value: 'spk', label: 'SPK', color: 'bg-green-100 text-green-800' },
  { value: 'do_invoice', label: 'DO / Invoicing', color: 'bg-teal-100 text-teal-800' },
  { value: 'dec', label: 'DEC (Delivery)', color: 'bg-indigo-100 text-indigo-800' },
  { value: 'closed_won', label: 'Closed (Won)', color: 'bg-gray-800 text-white' },
  { value: 'closed_lost', label: 'Closed (Lost)', color: 'bg-red-100 text-red-800' },
];

export default function LeadsAdminPage() {
  const [leads, setLeads] = useState(MOCK_LEADS);

  const handleStatusChange = (id: string, newStatus: string) => {
    setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
  };

  const getStatusColor = (statusValue: string) => {
    return STATUS_OPTIONS.find(s => s.value === statusValue)?.color || 'bg-gray-100 text-gray-800';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Lead Management System (LMS)</h2>
          <p className="text-sm text-gray-500 mt-1">Pantau prospek pelanggan dari hulu ke hilir</p>
        </div>
        <button className="bg-[#EB0A1E] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition">
          Export Data (.csv)
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div className="flex space-x-3">
            <input 
              type="text" 
              placeholder="Cari nama atau telepon..." 
              className="p-2 border border-gray-300 rounded-md text-sm w-64 focus:outline-none focus:border-gray-500"
            />
            <select className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-500">
              <option>Semua Status</option>
              <option>New Lead</option>
              <option>Follow Up</option>
              <option>SPK</option>
            </select>
          </div>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">ID / Tanggal</th>
                <th className="px-6 py-4">Prospek</th>
                <th className="px-6 py-4">Sumber / Kendaraan</th>
                <th className="px-6 py-4">Assigned Sales</th>
                <th className="px-6 py-4">Sales Pipeline Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-900">{lead.id}</div>
                    <div className="text-xs text-gray-400 mt-1">{lead.date}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-900">{lead.customerName}</div>
                    <div className="text-xs text-blue-600 mt-1">{lead.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-800">{lead.source}</div>
                    <div className="text-xs text-gray-500 mt-1">{lead.vehicle}</div>
                  </td>
                  <td className="px-6 py-4">
                    {lead.assignedTo === '-' ? (
                      <button className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded hover:bg-gray-300 font-medium">Assign Sales</button>
                    ) : (
                      <span className="font-medium text-gray-900">{lead.assignedTo}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      value={lead.status}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                      className={`text-xs font-bold px-2 py-1.5 rounded-md border-0 focus:ring-2 focus:ring-offset-1 focus:ring-gray-300 cursor-pointer ${getStatusColor(lead.status)}`}
                    >
                      {STATUS_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value} className="bg-white text-black font-medium">{opt.label}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <button className="text-blue-600 hover:underline font-medium">Detail</button>
                    <button className="text-green-600 hover:underline font-medium flex items-center justify-end w-full mt-2">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      Chat WA
                    </button>
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
