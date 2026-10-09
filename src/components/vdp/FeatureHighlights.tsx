export default function FeatureHighlights() {
  const features = [
    {
      title: "Exterior Dinamis",
      desc: "Desain aerodinamis dengan lekukan tegas yang memancarkan aura sporty dan elegan di setiap sudutnya.",
      img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Interior Premium",
      desc: "Kabin luas dengan material berkualitas tinggi, memberikan kenyamanan maksimal untuk pengemudi dan penumpang.",
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Toyota Safety Sense",
      desc: "Fitur keamanan mutakhir untuk melindungi Anda di setiap perjalanan, termasuk Pre-Collision System dan Lane Departure Alert.",
      img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="py-16 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img src={feature.img} alt={feature.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
