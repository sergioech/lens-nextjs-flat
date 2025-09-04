export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-28 text-center relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">Consultoría potenciada con AI</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          LENS integra estrategia, analytics y capacidades de inteligencia artificial
          para que las organizaciones tomen mejores decisiones y generen impacto real.
        </p>
        <a
          href="#contacto"
          className="bg-white text-primary px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 inline-block transition"
        >
          Conversemos
        </a>
        {/* Decoración sutil */}
        <div className="absolute -bottom-20 -left-10 w-60 h-60 bg-secondary rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -top-24 -right-16 w-72 h-72 bg-accent rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras áreas de expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Inteligencia Artificial",
              desc: "Modelos predictivos, optimización y soluciones avanzadas para transformar decisiones estratégicas."
            },
            {
              title: "Estrategia",
              desc: "Diseño de estrategias de crecimiento, operaciones y organización con un enfoque data-driven."
            },
            {
              title: "Analytics",
              desc: "Dashboards, segmentación avanzada y visualización de datos para soportar la toma de decisiones."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition transform"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industrias */}
      <section id="industrias" className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Industrias en las que trabajamos</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {["Retail", "Servicios financieros", "Salud", "Real Estate"].map((ind) => (
            <div
              key={ind}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition transform"
            >
              {ind}
            </div>
          ))}
        </div>
      </section>

      {/* Impacto */}
      <section id="impacto" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Resultados que generan impacto</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { value: "+20%", desc: "Aumento en ventas con modelos de predicción de demanda" },
            { value: "-15%", desc: "Reducción de costos logísticos aplicando optimización avanzada" },
            { value: "+30%", desc: "Mejora en adquisición de clientes en banca digital" },
          ].map((item) => (
            <div
              key={item.value}
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition transform"
            >
              <h3 className="text-4xl font-bold mb-3">{item.value}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-gradient-to-r from-primary to-secondary text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu negocio?</h2>
        <p className="mb-8">Hablemos de cómo AI, estrategia y analytics pueden generar impacto en tu organización</p>
        <a
          href="mailto:contacto@lens.mx"
          className="bg-white text-primary px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 inline-block transition"
        >
          Escríbenos
        </a>
      </section>
    </div>
  )
}
