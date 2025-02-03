
import { Navigation } from "@/components/zzsalon/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="pt-16">
      <Navigation showTitle={true} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Zpět na hlavní stránku
        </Link>
        <h1 className="text-4xl font-light mb-8">O nás</h1>
        <div className="prose prose-lg">
          <p>
            Kadeřnictví PETRŮ & ROSSI je profesionální vlasové studio s dlouholetou tradicí. 
            Naši kadeřníci jsou pravidelně školeni v nejnovějších trendech a technikách, 
            což nám umožňuje poskytovat našim klientům ty nejlepší služby.
          </p>
          <p>
            Specializujeme se na kompletní vlasový styling, od klasických střihů 
            až po náročné proměny. Používáme pouze kvalitní vlasovou kosmetiku 
            a nejmodernější technologie.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80" 
              alt="Náš salon"
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&q=80" 
              alt="Naše práce"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
