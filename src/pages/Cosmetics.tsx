
import { Navigation } from "@/components/zzsalon/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Cosmetics = () => {
  const services = [
    {
      title: "Kosmetické ošetření",
      description: "Kompletní péče o pleť včetně hloubkového čištění",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80"
    },
    {
      title: "Manikúra",
      description: "Profesionální péče o vaše ruce a nehty",
      image: "https://images.unsplash.com/photo-1610992015734-11a65b2c7844?auto=format&fit=crop&q=80"
    },
    {
      title: "Kosmetické přípravky",
      description: "Profesionální produkty pro domácí péči",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-16">
      <Navigation showTitle={true} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Zpět na hlavní stránku
        </Link>
        <h1 className="text-4xl font-light mb-8">Kosmetika a manikúra</h1>
        <div className="prose prose-lg mb-12">
          <p>
            V našem salonu nabízíme kompletní kosmetické služby a profesionální manikúru. 
            Naše zkušená kosmetička Ivet se postará o vaši pleť a ruce s využitím 
            nejkvalitnějších přípravků a moderních postupů.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <img 
                src={service.image} 
                alt={service.title}
                className="rounded-lg shadow-lg aspect-square object-cover"
              />
              <h3 className="text-xl font-light">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cosmetics;
