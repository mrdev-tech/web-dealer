import ColorVisualizer from "@/components/vdp/ColorVisualizer";
import FeatureHighlights from "@/components/vdp/FeatureHighlights";
import PricelistAccordion from "@/components/vdp/PricelistAccordion";
import Link from "next/link";

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  // Normally we would fetch the vehicle by ID here. Using static dummy for now.
  
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Sub-Nav (Sticky) */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex space-x-8 h-12 items-center text-sm font-medium text-gray-600">
            <li><a href="#overview" className="hover:text-[#EB0A1E]">Overview</a></li>
            <li><a href="#color" className="hover:text-[#EB0A1E]">Color</a></li>
            <li><a href="#features" className="hover:text-[#EB0A1E]">Features</a></li>
            <li><a href="#price" className="hover:text-[#EB0A1E]">Price</a></li>
          </ul>
        </div>
      </div>

      {/* 2. Overview Hero */}
      <div id="overview" className="relative bg-gray-900 h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1920&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="text-red-500 font-bold tracking-widest uppercase text-sm">MPV Premium</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 mb-4 drop-shadow-lg">All New Veloz</h1>
          <p className="text-xl text-gray-300 max-w-xl mb-8">
            Kenyamanan kelas atas berpadu dengan teknologi canggih. Siap menemani setiap perjalanan keluarga Anda.
          </p>
          <Link href="/test-drive" className="bg-[#EB0A1E] text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition shadow-lg">
            Booking Test Drive
          </Link>
        </div>
      </div>

      {/* 3. Color Visualizer */}
      <ColorVisualizer />

      {/* 4. Feature Highlights */}
      <FeatureHighlights />

      {/* 5. Pricelist Accordion */}
      <PricelistAccordion />
    </div>
  );
}
