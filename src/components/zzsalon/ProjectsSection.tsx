
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "../ui/aspect-ratio";

export const ProjectsSection = () => {
  const projects = [
    { 
      id: "damsky-strih",
      title: "Dámský střih", 
      desc: "Moderní styling",
      img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80",
      path: "/damsky-strih"
    },
    { 
      id: "pansky-strih",
      title: "Pánský střih", 
      desc: "Precizní úprava",
      img: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&q=80",
      path: "/pansky-strih"
    },
    { 
      id: "barveni",
      title: "Barvení", 
      desc: "Kreativní techniky",
      img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80",
      path: "/barveni"
    },
    { 
      id: "kosmetika",
      title: "Kosmetika", 
      desc: "Kompletní péče o pleť",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80",
      path: "/kosmetika"
    },
    { 
      id: "prodluzovani",
      title: "Prodlužování vlasů", 
      desc: "Profesionální prodloužení",
      img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80",
      path: "/prodluzovani"
    },
    { 
      id: "manikura",
      title: "Manikúra", 
      desc: "Péče o ruce a nehty",
      img: "https://images.unsplash.com/photo-1610992015734-11a65b2c7844?auto=format&fit=crop&q=80",
      path: "/kosmetika"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Naše práce</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <Link
              to={item.path || `#${item.id}`}
              key={index} 
              className="group relative aspect-square overflow-hidden bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AspectRatio ratio={1}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </AspectRatio>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 backdrop-blur-sm">
                <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-light mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                  <ExternalLink className="w-5 h-5 mx-auto mt-4 animate-pulse" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
