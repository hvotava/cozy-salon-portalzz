
export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Služby</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm animate-fade-up hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-xl font-light">Dámské kadeřnictví</h3>
            <p className="text-gray-400">Střihy, barvení, melírování, styling a komplexní péče o vaše vlasy.</p>
          </div>
          <div className="space-y-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm animate-fade-up [animation-delay:200ms] hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-xl font-light">Pánské kadeřnictví</h3>
            <p className="text-gray-400">Moderní střihy, úprava vousů a klasické holení břitvou.</p>
          </div>
          <div className="space-y-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm animate-fade-up [animation-delay:400ms] hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-xl font-light">Kosmetika a manikúra</h3>
            <p className="text-gray-400">Profesionální péče o vaši pleť, ruce a nehty.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
