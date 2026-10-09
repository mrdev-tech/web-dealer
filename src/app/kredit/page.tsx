'use client';
import { useState, useMemo } from 'react';

// DUMMY DATA FOR CALCULATOR
const MODELS = [
  { id: 1, name: "All New Avanza" },
  { id: 2, name: "All New Veloz" },
  { id: 3, name: "Innova Zenix" }
];

const VARIANTS = {
  1: [
    { name: "1.3 E M/T", price: 233100000 },
    { name: "1.5 G CVT", price: 270500000 },
  ],
  2: [
    { name: "1.5 M/T", price: 286000000 },
    { name: "1.5 Q CVT TSS", price: 331100000 },
  ],
  3: [
    { name: "2.0 G CVT", price: 425600000 },
    { name: "2.0 Q HV CVT TSS", price: 614000000 },
  ]
};

const formatRupiah = (number: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};

export default function KreditPage() {
  const [selectedModel, setSelectedModel] = useState<number>(MODELS[0].id);
  const [selectedVariant, setSelectedVariant] = useState<number>(0);
  const [dpPercent, setDpPercent] = useState<number>(20);
  const [tenorYears, setTenorYears] = useState<number>(5);

  const activeVariants = VARIANTS[selectedModel as keyof typeof VARIANTS] || [];
  const currentVariant = activeVariants[selectedVariant];
  const otrPrice = currentVariant?.price || 0;

  const calculations = useMemo(() => {
    const dpAmount = otrPrice * (dpPercent / 100);
    const pokokHutang = otrPrice - dpAmount;
    
    // Asumsi suku bunga flat 6% per tahun
    const interestRate = 0.06;
    const totalBunga = pokokHutang * interestRate * tenorYears;
    const totalHutang = pokokHutang + totalBunga;
    const cicilanPerBulan = totalHutang / (tenorYears * 12);

    return { dpAmount, pokokHutang, cicilanPerBulan, totalHutang };
  }, [otrPrice, dpPercent, tenorYears]);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Kalkulator Simulasi Kredit</h1>
          <p className="mt-4 text-lg text-gray-600">Hitung estimasi cicilan bulanan untuk mobil impian Anda</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="p-8 md:w-1/2 bg-white">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Model</label>
                <select 
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#EB0A1E] focus:border-[#EB0A1E] p-3 border"
                  value={selectedModel}
                  onChange={(e) => {
                    setSelectedModel(Number(e.target.value));
                    setSelectedVariant(0);
                  }}
                >
                  {MODELS.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Varian</label>
                <select 
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#EB0A1E] focus:border-[#EB0A1E] p-3 border"
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(Number(e.target.value))}
                >
                  {activeVariants.map((v, idx) => (
                    <option key={idx} value={idx}>{v.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment (DP) - {dpPercent}%</label>
                <input 
                  type="range" 
                  min="20" max="80" step="5"
                  value={dpPercent} 
                  onChange={(e) => setDpPercent(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#EB0A1E]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>20%</span>
                  <span>80%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tenor (Tahun)</label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map(year => (
                    <button 
                      key={year}
                      onClick={() => setTenorYears(year)}
                      className={`py-2 rounded-lg font-medium transition border ${
                        tenorYears === year 
                          ? 'bg-[#EB0A1E] text-white border-[#EB0A1E]' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Result Section */}
          <div className="p-8 md:w-1/2 bg-gray-900 text-white flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wider">Hasil Simulasi</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-400">Harga OTR</span>
                <span className="font-bold">{formatRupiah(otrPrice)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-400">Total DP ({dpPercent}%)</span>
                <span className="font-bold text-green-400">{formatRupiah(calculations.dpAmount)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-400">Pokok Hutang</span>
                <span className="font-bold">{formatRupiah(calculations.pokokHutang)}</span>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700">
              <span className="block text-sm text-gray-400 mb-2">Estimasi Cicilan per Bulan</span>
              <span className="block text-4xl font-extrabold text-[#EB0A1E] drop-shadow-md">
                {formatRupiah(calculations.cicilanPerBulan)}
              </span>
              <span className="block text-xs text-gray-500 mt-2">*Perhitungan menggunakan suku bunga flat 6%</span>
            </div>

            <button className="mt-8 w-full bg-white text-gray-900 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Ajukan Penawaran Ini
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
