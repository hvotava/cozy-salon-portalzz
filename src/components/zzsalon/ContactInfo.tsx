
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const ContactInfo = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-down">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Kontakt
          </h2>
          <p className="text-gray-500 max-w-[600px] mx-auto">
            Rádi vás přivítáme v našem kadeřnickém salónu.
          </p>
          <p className="text-gray-500 max-w-[600px] mx-auto mt-4">
            Pro objednání nebo jakékoliv dotazy nás neváhejte kontaktovat. Těšíme se na vaši návštěvu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center space-y-2 p-4">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-medium">Adresa</h3>
            <div className="text-gray-500 text-center">
              <p>Prokopova 18</p>
              <p>Praha 3</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-4">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-medium">Telefon</h3>
            <a href="tel:222781700" className="text-gray-500 hover:text-black transition-colors">
              222 781 700
            </a>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-4">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-medium">Email</h3>
            <a href="mailto:tonyazuzana@zzsalon.cz" className="text-gray-500 hover:text-black transition-colors">
              tonyazuzana@zzsalon.cz
            </a>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-4">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-medium">Provozní doba</h3>
            <div className="text-gray-500 text-center">
              <p>Po – Pá</p>
              <p>10:00 – 19:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
