
import { Navigation } from "@/components/zzsalon/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HairExtensions = () => {
  const methods = [
    {
      title: "Metoda Loop-in",
      description: "Šetrná metoda prodloužení vlasů pomocí mikroring kroužků",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80"
    },
    {
      title: "Různé délky",
      description: "Nabízíme prodloužení od 20 do 60 cm",
      image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80"
    },
    {
      title: "Přírodní vlasy",
      description: "Používáme pouze kvalitní evropské vlasy",
      image: "https://images.unsplash.com/photo-1626954079979-ec4f7b05e032?auto=format&fit=crop&q=80"
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
        <h1 className="text-4xl font-light mb-8">Prodlužování vlasů</h1>
        <div className="prose prose-lg mb-12">
          <p>
            Specializujeme se na profesionální prodlužování vlasů metodou Loop-in. 
            Tato metoda je velmi šetrná k vlastním vlasům a poskytuje přirozený vzhled. 
            Používáme pouze kvalitní evropské vlasy a nejmodernější techniky aplikace.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div key={index} className="space-y-4">
              <img 
                src={method.image} 
                alt={method.title}
                className="rounded-lg shadow-lg aspect-square object-cover"
              />
              <h3 className="text-xl font-light">{method.title}</h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairExtensions;
