export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white py-28 text-center">
        <h1 className="text-5xl font-bold mb-6">Consultoría potenciada con AI</h1>
        <p className="text-xl mb-8">
          LENS integra estrategia, analytics y capacidades de inteligencia artificial
          para que las organizaciones tomen mejores decisiones y generen impacto real.
        </p>
        <a href="#contacto" className="bg-white text-cyan-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100">
          Conversemos
        </a>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras áreas de expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Inteligencia Artificial</h3>
            <p>Modelos predictivos, optimización y soluciones avanzadas para transformar decisiones estratégicas.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Estrategia</h3>
            <p>Diseño de estrategias de crecimiento, operaciones y organización con un enfoque data-driven.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Analytics</h3>
            <p>Dashboards, segmentación avanzada y visualización de datos para soportar la toma de decisiones.</p>
          </div>
        </div>
      </section>

      {/* Industrias */}
      <section id="industrias" className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Industrias en las que trabajamos</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-md">Retail</div>
          <div className="p-6 bg-white rounded-xl shadow-md">Servicios financieros</div>
          <div className="p-6 bg-white rounded-xl shadow-md">Salud</div>
          <div className="p-6 bg-white rounded-xl shadow-md">Real Estate</div>
        </div>
      </section>

      {/* Impacto */}
      <section id="impacto" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Resultados que generan impacto</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-cyan-600 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-4xl font-bold mb-3">+20%</h3>
            <p>Aumento en ventas con modelos de predicción de demanda</p>
          </div>
          <div className="bg-cyan-600 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-4xl font-bold mb-3">-15%</h3>
            <p>Reducción de costos logísticos aplicando optimización avanzada</p>
          </div>
          <div className="bg-cyan-600 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-4xl font-bold mb-3">+30%</h3>
            <p>Mejora en adquisición de clientes en banca digital</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu negocio?</h2>
        <p className="mb-8">Hablemos de cómo AI, estrategia y analytics pueden generar impacto en tu organización</p>
        <a href="mailto:contacto@lens.mx" className="bg-white text-cyan-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100">
          Escríbenos
        </a>
      </section>
    </div>
  )
}
