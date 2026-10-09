'use client';
import { useState } from 'react';

// Mock Data
const PRICELIST_DATA = [
  {
    id: 'v1',
    model: 'All New Avanza',
    category: 'MPV',
    variants: [
      { id: 'var1', type: '1.3 E M/T', price: 239700000 },
      { id: 'var2', type: '1.5 G M/T', price: 262000000 },
      { id: 'var3', type: '1.5 G CVT', price: 276700000 },
    ]
  },
  {
    id: 'v2',
    model: 'Innova Zenix',
    category: 'SUV',
    variants: [
      { id: 'var4', type: '2.0 G CVT', price: 430400000 },
      { id: 'var5', type: '2.0 V CVT', price: 476200000 },
      { id: 'var6', type: '2.0 Q HV CVT TSS', price: 627600000 },
    ]
  },
  {
    id: 'v3',
    model: 'All New Yaris Cross',
    category: 'SUV',
    variants: [
      { id: 'var7', type: '1.5 G M/T', price: 353900000 },
      { id: 'var8', type: '1.5 S HV CVT TSS', price: 449950000 },
    ]
  }
];

export default function PricelistAdminPage() {
  const [data, setData] = useState(PRICELIST_DATA);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  const handleEdit = (variantId: string, currentPrice: number) => {
    setEditingId(variantId);
    setEditValue(currentPrice.toString());
  };

  const handleSave = (modelId: string, variantId: string) => {
    // Di dunia nyata, ini akan menembak API POST/PUT ke server
    const updatedData = data.map(vehicle => {
      if (vehicle.id === modelId) {
        return {
          ...vehicle,
          variants: vehicle.variants.map(v => 
            v.id === variantId ? { ...v, price: parseInt(editValue) || v.price } : v
          )
        };
      }
      return vehicle;
    });
    
    setData(updatedData);
    setEditingId(null);
  };

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Pricelist Kendaraan</h2>
          <p className="text-sm text-gray-500 mt-1">Perbarui Harga OTR Jakarta per Model dan Tipe</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
          Export CSV
        </button>
      </div>

      <div className="space-y-6">
        {data.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-bold text-gray-900">{vehicle.model}</h3>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded font-medium">{vehicle.category}</span>
              </div>
              <button className="text-sm font-medium text-blue-600 hover:underline flex items-center">
                + Tambah Tipe Baru
              </button>
            </div>
            
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-400 uppercase bg-white border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 w-1/3">Tipe Varian</th>
                  <th className="px-6 py-3 w-1/3">Harga OTR (Rp)</th>
                  <th className="px-6 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {vehicle.variants.map((variant) => (
                  <tr key={variant.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {variant.type}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {editingId === variant.id ? (
                        <div className="flex items-center">
                          <span className="text-gray-500 mr-2">Rp</span>
                          <input 
                            type="number" 
                            className="border border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-200 w-32"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            autoFocus
                          />
                        </div>
                      ) : (
                        formatRupiah(variant.price)
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {editingId === variant.id ? (
                        <div className="flex justify-end space-x-2">
                          <button 
                            onClick={() => handleSave(vehicle.id, variant.id)}
                            className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold hover:bg-blue-700"
                          >
                            Simpan
                          </button>
                          <button 
                            onClick={() => setEditingId(null)}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs font-bold hover:bg-gray-300"
                          >
                            Batal
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => handleEdit(variant.id, variant.price)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-end w-full"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                          Edit Harga
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
