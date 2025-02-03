
import { Navigation } from "@/components/zzsalon/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const Cosmetics = () => {
  const services = [
    {
      title: "Kosmetické ošetření",
      description: "Kompletní péče o pleť včetně hloubkového čištění",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80"
    },
    {
      title: "Manikúra",
      description: "Profesionální péče o vaše ruce a nehty",
      image: "https://images.unsplash.com/photo-1610992015734-11a65b2c7844?auto=format&fit=crop&q=80"
    },
    {
      title: "Kosmetické přípravky",
      description: "Profesionální produkty pro domácí péči",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80"
    }
  ];

  const priceList = [
    { service: "Úprava obočí", price: "150 Kč" },
    { service: "Barvení obočí", price: "110 Kč" },
    { service: "Barvení řas", price: "150 Kč" },
    { service: "Čištění pleti ultrazvukovou špachtlí", price: "500 Kč" },
    { service: "Parafinový zábal ruce", price: "120 Kč" },
    { service: "Depilace části obličeje", price: "185 Kč" },
    { service: "Depilace podpaží", price: "150-250 Kč" },
    { service: "Depilace ruce celé", price: "250-500 Kč" },
    { service: "Depilace nohy celé", price: "450-600 Kč" },
    { service: "Depilace zad / hruď", price: "250-500 Kč" },
    { service: "Brazilská depilace", price: "600 Kč" },
    { service: "Péče o nohy", price: "od 380 Kč" },
    { service: "Manikúra", price: "od 250 Kč" },
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
        <h1 className="text-4xl font-light mb-8">Kosmetika a manikúra</h1>
        <div className="prose prose-lg mb-12">
          <p>
            V našem salonu nabízíme kompletní kosmetické služby a profesionální manikúru. 
            Naše zkušená kosmetička Ivet se postará o vaši pleť a ruce s využitím 
            nejkvalitnějších přípravků a moderních postupů.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <img 
                src={service.image} 
                alt={service.title}
                className="rounded-lg shadow-lg aspect-square object-cover"
              />
              <h3 className="text-xl font-light">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-16 mb-16">
          <section>
            <h2 className="text-3xl font-light mb-8">Ceník služeb</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
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
          </section>

          <section>
            <h2 className="text-3xl font-light mb-8">Kosmetické balíčky</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-light mb-4">Deluxe</h3>
                <p className="text-2xl font-medium mb-4">750 Kč</p>
                <p className="text-gray-600">
                  Parafínový zábal na ruce, anamnéza pleti, povrchové čištění (odlíčení), 
                  hluboké čištění, peeling, barvení obočí a řas, úprava obočí, roll-on okolo očí, 
                  příslušná ampule, masáž podle typu pleti, maska, závěrečný krém.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-light mb-4">HB pro muže</h3>
                <p className="text-2xl font-medium mb-4">500 Kč</p>
                <p className="text-gray-600">
                  Anamnéza pleti, povrchové čištění pleti (odlíčení), hloubkové čištění pleťi, 
                  úprava obočí, masáž (dekolt, krk, obličej, mikromasáž očního okolí), peeling, 
                  maska, závěrečný krém.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-light mb-8">O kosmetice Hildegard Braukmann</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Pracuji s německou kosmetikou Hildegard Braukmann. Podnik založila německá 
                kosmetička Hildegard Braukmann v roce 1962. Od začátku se zabývala vysoce 
                účinnou bylinnou kosmetikou s vitamíny.
              </p>
              <h3>Filozofie firmy HB</h3>
              <p>
                Hlavním heslem firmy Hildegard Braukmann je: "VYSOKÁ KVALITA". Vysoká kvalita 
                je zajišťována vlastními výzkumy v laboratořích ve spolupráci s vedoucími 
                universitami a dermatologickými klinikami v Německu.
              </p>
              <h3>Charakteristika kosmetiky</h3>
              <ul>
                <li>Kosmetika je dobře snášena alergiky a lidmi s dermatologickými obtížemi pokožky</li>
                <li>Osloví širokou klientelu v celé věkové škále</li>
                <li>Řada Institute obsahuje látky s biobotoxem (výtažek ze stromu z Madagaskaru)</li>
                <li>Není parfemovaná ani dobarvovaná – voní pouze po bylinkách</li>
                <li>Obaly jsou jednoduše ekologicky likvidovatelné, neobsahují chlór</li>
                <li>Neprovádí se testy a pokusy na zvířetech</li>
                <li>Pracuje se zde výhradně s rostlinnými extrakty a oleji nejvyšší kvality</li>
                <li>Luxusní kvalita za dosažitelnou cenu</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-light mb-8">Depilace</h2>
            <div className="prose prose-lg max-w-none">
              <p>Nabízíme následující metody:</p>
              <ul>
                <li>Teplý vosk (roll-on)</li>
                <li>Filmwax</li>
              </ul>
              <p>Důležité informace o depilaci:</p>
              <ul>
                <li>Při depilaci dochází k odstraňování chloupků i s kořínky, efekt vydrží u vosku 3 – 5 týdnů</li>
                <li>Po depilaci může kůže být lehce začervenalá, tento problém mizí během několika minut</li>
                <li>Po depilaci je důležité dodržovat následující pravidla (po dobu 24 hodin):
                  <ul>
                    <li>Nechodit ihned na sluníčko</li>
                    <li>Na depilovanou pokožku nepoužívat parfémy</li>
                    <li>Nadměrně nemáčet depilovanou pokožku</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cosmetics;
