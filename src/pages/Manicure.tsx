
import { Navigation } from "@/components/zzsalon/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const Manicure = () => {
  const services = [
    {
      title: "Klasická manikúra",
      description: "Kompletní péče o nehty včetně masáže rukou",
      price: "od 250 Kč",
      image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&q=80",
    },
    {
      title: "Gel lak",
      description: "Dlouhotrvající úprava nehtů s gel lakem",
      price: "od 400 Kč",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80",
    },
    {
      title: "Modeláž nehtů",
      description: "Profesionální modeláž nehtů dle vašeho přání",
      price: "od 600 Kč",
      image: "https://images.unsplash.com/photo-1610992015734-11a65b2c7844?auto=format&fit=crop&q=80",
    },
  ];

  const priceList = [
    { service: "Základní manikúra", price: "250 Kč" },
    { service: "P-shine", price: "300 Kč" },
    { service: "Gel lak", price: "400 Kč" },
    { service: "Doplnění gel laku", price: "350 Kč" },
    { service: "Modeláž nehtů - nová", price: "600 Kč" },
    { service: "Modeláž nehtů - doplnění", price: "400 Kč" },
    { service: "Odstranění modeláže", price: "200 Kč" },
    { service: "Oprava nehtu", price: "50 Kč" },
    { service: "Zdobení nehtů (1 nehet)", price: "20-50 Kč" },
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
        
        <h1 className="text-4xl font-light mb-8">Manikúra a modeláž nehtů</h1>
        
        <div className="prose prose-lg mb-12">
          <p>
            Nabízíme kompletní služby péče o nehty, od klasické manikúry až po profesionální 
            modeláž. Používáme kvalitní materiály a nejnovější technologie pro dosažení 
            perfektních výsledků.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-light">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <p className="text-lg font-medium">{service.price}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-16">
          <h2 className="text-3xl font-light mb-8">Ceník služeb</h2>
          <Table>
            <TableBody>
              {priceList.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.service}</TableCell>
                  <TableCell className="text-right">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="prose prose-lg">
          <h2>Péče o nehty</h2>
          <p>
            Pro dlouhotrvající výsledek je důležitá pravidelná péče o nehty a ruce. 
            Nabízíme kompletní služby od základní manikúry až po nejmodernější techniky 
            modeláže nehtů.
          </p>
          
          <h3>Používáme kvalitní materiály</h3>
          <ul>
            <li>Profesionální gel laky s dlouhou výdrží</li>
            <li>Kvalitní materiály pro modeláž nehtů</li>
            <li>Pečující přípravky pro výživu nehtů a pokožky</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Manicure;
