
import { Menu, Home, Image, Users, Mail, Scissors } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  showTitle: boolean;
  onSectionClick?: (sectionId: string) => void;
}

export const Navigation = ({ showTitle, onSectionClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    if (onSectionClick) {
      onSectionClick(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h2 className={`text-xl font-light tracking-wide transition-opacity duration-300 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
            Kadeřnictví PETRŮ & ROSSI
          </h2>
          <div className="w-6" />
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 shadow-lg animate-fade-down backdrop-blur-sm">
          <div className="container mx-auto py-4 px-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleSectionClick('home')}
                  className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Home className="w-5 h-5" />
                  Úvod
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('projects')}
                  className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Image className="w-5 h-5" />
                  Naše práce
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('services')}
                  className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Users className="w-5 h-5" />
                  Služby
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('pricing')}
                  className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Scissors className="w-5 h-5" />
                  Ceník
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('contact')}
                  className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
