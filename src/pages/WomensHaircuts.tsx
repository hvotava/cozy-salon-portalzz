
import { Navigation } from "@/components/zzsalon/Navigation";

const WomensHaircuts = () => {
  const styles = [
    {
      title: "Moderní střihy",
      description: "Současné trendy v dámských účesech",
      image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&q=80"
    },
    {
      title: "Dlouhé vlasy",
      description: "Střihy a styling pro dlouhé vlasy",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80"
    },
    {
      title: "Bob & Pixie",
      description: "Krátké a polodlouhé střihy",
      image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-16">
      <Navigation showTitle={true} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-light mb-8">Dámské střihy</h1>
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

export default WomensHaircuts;
