
import { Navigation } from "@/components/zzsalon/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="pt-16">
      <Navigation showTitle={true} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Zpět na hlavní stránku
        </Link>
        <h1 className="text-4xl font-light mb-8">O nás</h1>
        <div className="prose prose-lg">
          <p className="text-xl font-light mb-6">
            Vítáme Vás v ZZ Salonu na Žižkově! Najdete nás na adrese Prokopova 18, Praha 3, 
            v blízkosti autobusových zastávek Tachovské náměstí (linky 175, 207) a Rokycanova (linky 136, 175).
          </p>
          
          <p>
            Již více než 30 let poskytujeme prvotřídní kadeřnické služby v našem salonu. 
            Disponujeme samostatně oddělenými prostory pro kadeřnictví a kosmetiku, 
            čímž zajišťujeme maximální komfort pro naše klienty.
          </p>

          <p>
            Naším hlavním cílem je poskytnout Vám tu nejlepší profesionální péči. 
            Ať už hledáte dokonalý střih, novou barvu, účes pro zvláštní příležitost 
            nebo komplexní péči o pleť, jsme tu pro Vás.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80" 
              alt="Náš salon"
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&q=80" 
              alt="Naše práce"
              className="rounded-lg shadow-lg"
            />
          </div>

          <p>
            Naši kadeřníci pravidelně navštěvují Milán, kde se zdokonalují pod vedením 
            uznávaného Savéria Palmy. Díky tomu můžeme nabídnout širokou škálu střihů 
            - od extravagantních účesů přes elegantní společenské úpravy až po praktické 
            střihy pro každodenní nošení.
          </p>

          <p>
            Při naší práci používáme výhradně špičkovou vlasovou kosmetiku značky BES. 
            Naší filozofií je nejen krása, ale i zdraví Vašich vlasů. Rádi Vám poradíme 
            s výběrem vhodných přípravků pro domácí péči.
          </p>

          <h2 className="text-2xl font-light mt-8 mb-4">Náš tým</h2>
          <ul className="list-disc pl-6">
            <li>Zuzka – kadeřnice</li>
            <li>Pavla – kadeřnice</li>
            <li>Oliver – kadeřník</li>
            <li>Tony – prodlužování vlasů</li>
            <li>Ivet – kosmetika a manikúra</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
