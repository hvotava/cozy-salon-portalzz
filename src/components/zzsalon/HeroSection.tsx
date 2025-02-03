
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center p-4 relative pt-16">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight animate-fade-down">
          Kadeřnictví ZZsalon
        </h1>
        
        <div className="animate-fade-up">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/760e91c9-8500-4f79-9996-73e5a82db2e0.png"
              alt="Interiér salonu" 
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
