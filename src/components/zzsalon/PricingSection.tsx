
export const PricingSection = () => {
  const allServices = [
    { service: "Dámský střih", price: "880 Kč" },
    { service: "HOT břitva", price: "850 Kč" },
    { service: "Pánské stříhání", price: "500 Kč" },
    { service: "Strojek", price: "250 Kč" },
    { service: "Dětský do 10 let", price: "420 Kč" },
    { service: "Dětský dívčí", price: "460 Kč" },
    { service: "Foukání, mytí, ošetření, styling", price: "300 - 600 Kč" },
    { service: "Barvení", price: "od 450 - 1000 Kč" },
    { service: "Melíry", price: "od 580 - 2500 Kč" },
    { service: "Laminace", price: "1500 Kč" },
    { service: "Trvalá", price: "od 920 - 2100 Kč" },
    { service: "Společenské účesy", price: "od 600 - 2000 Kč" },
  ];

  const extensionServices = [
    { service: "20 cm", price: "4 000 Kč" },
    { service: "30 cm", price: "5 500 Kč" },
    { service: "40 cm", price: "8 000 Kč" },
    { service: "50 cm", price: "9 000 Kč" },
    { service: "60 cm", price: "dle domluvy" },
    { service: "Předělání po 3 měsících", price: "2 500 - 2 800 Kč" },
    { service: "Jednotlivé prameny", price: "od 40 Kč" },
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Ceník</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-6 text-center">Kadeřnické služby</h3>
            <div className="space-y-4">
              {allServices.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span>{item.service}</span>
                  <span className="text-gray-600">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 my-8" />

          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-6 text-center">Prodloužení vlasů</h3>
            <p className="text-center text-gray-600 mb-6">Ceník prodloužení vlasů metodou Loop-in (orientační, okolo 100 pramenů)</p>
            <div className="space-y-4">
              {extensionServices.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span>{item.service}</span>
                  <span className="text-gray-600">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8 italic text-center">
            Podrobnější informace v salonu. Ceny jsou pouze orientační, záleží na délce, hustotě vlasů a na množství spotřebovaného materiálu.
          </p>
        </div>
      </div>
    </section>
  );
};
