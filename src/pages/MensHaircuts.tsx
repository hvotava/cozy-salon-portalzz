
import { Navigation } from "@/components/zzsalon/Navigation";

const MensHaircuts = () => {
  const styles = [
    {
      title: "Klasický střih",
      description: "Tradiční pánský střih s moderním nádechem",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80"
    },
    {
      title: "Fade",
      description: "Precizní přechody a moderní styling",
      image: "https://images.unsplash.com/photo-1622285117833-4f5e4dab8742?auto=format&fit=crop&q=80"
    },
    {
      title: "Úprava vousů",
      description: "Profesionální péče o vousy a styling",
      image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-16">
      <Navigation showTitle={true} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-light mb-8">Pánské střihy</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <div key={index} className="space-y-4">
              <img 
                src={style.image} 
                alt={style.title}
                className="rounded-lg shadow-lg aspect-square object-cover"
              />
              <h3 className="text-xl font-light">{style.title}</h3>
              <p className="text-gray-600">{style.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MensHaircuts;
