
import { Navigation } from "@/components/zzsalon/Navigation";

const HairColoring = () => {
  const techniques = [
    {
      title: "Balayage",
      description: "Přirozený přechod barev pro moderní vzhled",
      image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80"
    },
    {
      title: "Melírování",
      description: "Klasické i moderní techniky melírování",
      image: "https://images.unsplash.com/photo-1617896848219-5e80c5f8fbbc?auto=format&fit=crop&q=80"
    },
    {
      title: "Barvení",
      description: "Celoplošné barvení a barevné změny",
      image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-16">
      <Navigation showTitle={true} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-light mb-8">Barvení vlasů</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techniques.map((technique, index) => (
            <div key={index} className="space-y-4">
              <img 
                src={technique.image} 
                alt={technique.title}
                className="rounded-lg shadow-lg aspect-square object-cover"
              />
              <h3 className="text-xl font-light">{technique.title}</h3>
              <p className="text-gray-600">{technique.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairColoring;
