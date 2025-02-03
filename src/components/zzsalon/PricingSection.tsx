
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

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Ceník</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 animate-fade-up">
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
            <p className="text-sm text-gray-500 mt-8 italic text-center">
              Podrobnější informace v salonu. Ceny jsou pouze orientační, záleží na délce, hustotě vlasů a na množství spotřebovaného materiálu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
