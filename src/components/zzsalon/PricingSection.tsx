
export const PricingSection = () => {
  const womenServices = [
    { service: "Stříhání, foukaná", price: "od 800 Kč" },
    { service: "Barvení, stříhání, foukaná", price: "od 1400 Kč" },
    { service: "Preparace vlasů, stříhání, foukaná", price: "od 1350 Kč" },
    { service: "Melírování vlasů, stříhání, foukaná", price: "od 1700 Kč" },
    { service: "Manikúra", price: "od 400 Kč" },
    { service: "Modeláž nových nehtů", price: "od 950 Kč" },
    { service: "Doplnění nehtů", price: "od 650 Kč" },
    { service: "Lakování gel-lak", price: "od 600 Kč" },
    { service: "Prodloužení nehtů gelem", price: "od 900 Kč" },
    { service: "Kosmetika", price: "od 1200 Kč" },
    { service: "Pedikúra", price: "od 600 Kč" },
  ];

  const menServices = [
    { service: "Mytí, stříhání, foukaná", price: "od 480 Kč" },
    { service: "Stříhání", price: "od 300 Kč" },
    { service: "Střih – strojek", price: "od 225 Kč" },
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Ceník</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-light mb-4">Dámský ceník</h3>
            <div className="space-y-4">
              {womenServices.map((item, index) => (
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
          <div className="space-y-6 animate-fade-up [animation-delay:200ms]">
            <h3 className="text-2xl font-light mb-4">Pánský ceník</h3>
            <div className="space-y-4">
              {menServices.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span>{item.service}</span>
                  <span className="text-gray-600">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-8 italic">
              Ceny jsou pouze orientační, záleží na délce, hustotě vlasů a na množství spotřebovaného materiálu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
