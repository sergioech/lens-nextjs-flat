import { FaRobot, FaChartLine, FaDatabase } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#4A25A9] to-[#00F0FF] text-white py-28 text-center relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">Consultoría potenciada con AI</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          LENS integra estrategia, analytics y capacidades de inteligencia artificial
          para que las organizaciones tomen mejores decisiones y generen impacto real.
        </p>
        <a
          href="#contacto"
          className="bg-white text-[#4A25A9] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 inline-block transition"
        >
          Conversemos
        </a>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras áreas de expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition transform text-center">
            <FaRobot className="text-[#4A25A9] mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-semibold mb-3">Inteligencia Artificial</h3>
            <p className="text-gray-600">Modelos predictivos, optimización y soluciones avanzadas para transformar decisiones estratégicas.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition transform text-center">
            <FaChartLine className="text-[#00F0FF] mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-semibold mb-3">Estrategia</h3>
            <p className="text-gray-600">Diseño de estrategias de crecimiento, operaciones y organización con un enfoque data-driven.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition transform text-center">
            <FaDatabase className="text-[#FF4DAB] mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-semibold mb-3">Analytics</h3>
            <p className="text-gray-600">Dashboards, segmentación avanzada y visualización de datos para soportar la toma de decisiones.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-gradient-to-r from-[#4A25A9] to-[#00F0FF] text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu negocio?</h2>
        <p className="mb-8">Hablemos de cómo AI, estrategia y analytics pueden generar impacto en tu organización</p>
        <a href="mailto:contacto@lens.mx" className="bg-white text-[#4A25A9] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100">
          Escríbenos
        </a>
      </section>
    </div>
  )
}
