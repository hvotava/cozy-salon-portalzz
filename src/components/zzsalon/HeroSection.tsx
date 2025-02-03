
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center p-4 relative pt-16">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight animate-fade-down">
          Kadeřnictví PETRŮ & ROSSI
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/salon-interior-1.jpg"
              alt="Interiér salonu" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/salon-interior-2.jpg"
              alt="Kadeřnické křeslo a vybavení" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
          Vytváříme jedinečné účesy, které podtrhnou vaši osobnost. Našim cílem je, abyste se u nás cítili skvěle a odcházeli s dokonalým vzhledem.
        </p>

        <div className="animate-fade-up [animation-delay:400ms]">
          <Link to="/o-nas">
            <Button variant="outline" size="lg">
              O nás
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};
