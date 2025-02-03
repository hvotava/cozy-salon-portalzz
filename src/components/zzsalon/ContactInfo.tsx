
import { Mail, Phone, MapPin, Building } from "lucide-react";

export const ContactInfo = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-down">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Kontakt
          </h2>
          <p className="text-gray-500 max-w-[600px] mx-auto">
            Rádi vás přivítáme v našich kadeřnických salónech.
          </p>
          <p className="text-gray-500 max-w-[600px] mx-auto mt-4">
            Pro objednání nebo jakékoliv dotazy nás neváhejte kontaktovat. Těšíme se na vaši návštěvu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center space-y-2 p-4">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-medium">Firma</h3>
            <div className="text-gray-500 text-center">
              <p className="font-medium">Kadeřnictví PETRŮ & ROSSI s.r.o.</p>
              <p>Management: Na Okraji 44</p>
              <p>Praha 6 - Petřiny</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-4">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-medium">Management</h3>
            <a href="tel:603168653" className="text-gray-500 hover:text-black transition-colors">
              +420 603 168 653
            </a>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-4">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-medium">Email</h3>
            <div className="text-center">
              <a href="mailto:kadernictvi@petrurossi.cz" className="text-gray-500 hover:text-black transition-colors">
                kadernictvi@petrurossi.cz
              </a>
              <p className="text-xs text-gray-400 mt-1">(neslouží pro objednávání zákazníků)</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-4">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-medium">Fakturační údaje</h3>
            <div className="text-gray-500 text-center text-sm">
              <p>Londýnská 375/61</p>
              <p>PRAHA 2 – VINOHRADY</p>
              <p>120 00 PRAHA 2</p>
              <p>IČO: 25687441</p>
              <p>DIČ: CZ25687441</p>
              <p className="mt-1">Datová schránka: mspetxd</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
