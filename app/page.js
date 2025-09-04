export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-700 to-indigo-500 text-white rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Decisiones más precisas con AI & Analytics</h2>
        <p className="text-lg mb-6">Ayudamos a empresas a crecer, optimizar y reducir riesgos</p>
        <button className="bg-white text-purple-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100">
          Agenda una demo
        </button>
      </section>

      {/* Expertise section */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-center">Áreas de Expertise</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md">AI & Analytics</div>
          <div className="p-6 bg-white rounded-lg shadow-md">Estrategia & Crecimiento</div>
          <div className="p-6 bg-white rounded-lg shadow-md">Riesgo & Optimización</div>
        </div>
      </section>

      {/* Industries section */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-center">Industrias</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md">Retail</div>
          <div className="p-6 bg-white rounded-lg shadow-md">Real Estate</div>
          <div className="p-6 bg-white rounded-lg shadow-md">Salud</div>
          <div className="p-6 bg-white rounded-lg shadow-md">Seguros</div>
          <div className="p-6 bg-white rounded-lg shadow-md">Finanzas</div>
          <div className="p-6 bg-white rounded-lg shadow-md">Automotriz & Movilidad</div>
        </div>
      </section>

      {/* Results section */}
      <section className="text-center py-12">
        <h3 className="text-2xl font-bold mb-6">Resultados</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-purple-50 rounded-lg shadow-md">+25% en ventas proyectadas</div>
          <div className="p-6 bg-purple-50 rounded-lg shadow-md">-30% en riesgo crediticio</div>
          <div className="p-6 bg-purple-50 rounded-lg shadow-md">Mejor toma de decisiones</div>
        </div>
      </section>
    </div>
  )
}
