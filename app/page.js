"use client";

import { FaRobot, FaChartLine, FaDatabase } from 'react-icons/fa';

export default function Home() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#4A25A9] to-[#00F0FF] text-white py-32 text-center relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Consultoría potenciada con AI</h1>
        <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
          LENS integra estrategia, analytics y capacidades de inteligencia artificial
          para que las organizaciones tomen decisiones más precisas y generen impacto real.
        </p>
        <a
          href="#contacto"
          className="bg-white text-[#4A25A9] px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 inline-block transition-transform"
        >
          Conversemos
        </a>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-24 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Nuestras áreas de expertise</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-transform text-center">
            <FaRobot className="text-[#4A25A9] mx-auto mb-5 text-5xl" />
            <h3 className="text-xl font-semibold mb-4">Inteligencia Artificial</h3>
            <p className="text-gray-600">Modelos predictivos, optimización y soluciones avanzadas para transformar decisiones estratégicas.</p>
          </div>
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-transform text-center">
            <FaChartLine className="text-[#00F0FF] mx-auto mb-5 text-5xl" />
            <h3 className="text-xl font-semibold mb-4">Estrategia</h3>
            <p className="text-gray-600">Diseño de estrategias de crecimiento, operaciones y organización con un enfoque data-driven.</p>
          </div>
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-transform text-center">
            <FaDatabase className="text-[#FF4DAB] mx-auto mb-5 text-5xl" />
            <h3 className="text-xl font-semibold mb-4">Analytics</h3>
            <p className="text-gray-600">Dashboards, segmentación avanzada y visualización de datos para soportar la toma de decisiones.</p>
          </div>
        </div>
      </section>

      {/* Industrias */}
      <section id="industrias" className="bg-gray-50 py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Industrias en las que trabajamos</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">Retail</div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">Servicios financieros</div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">Salud</div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">Real Estate</div>
        </div>
      </section>

      {/* Impacto */}
      <section id="impacto" className="py-24 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Resultados que generan impacto</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#4A25A9] text-white rounded-2xl p-10 shadow-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-4xl font-bold mb-3">+20%</h3>
            <p>Aumento en ventas con modelos de predicción de demanda</p>
          </div>
          <div className="bg-[#00F0FF] text-white rounded-2xl p-10 shadow-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-4xl font-bold mb-3">-15%</h3>
            <p>Reducción de costos logísticos aplicando optimización avanzada</p>
          </div>
          <div className="bg-[#FF4DAB] text-white rounded-2xl p-10 shadow-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-4xl font-bold mb-3">+30%</h3>
            <p>Mejora en adquisición de clientes en banca digital</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-gradient-to-r from-[#4A25A9] to-[#00F0FF] text-white py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu negocio?</h2>
        <p className="mb-10 max-w-2xl mx-auto text-white/90">Hablemos de cómo AI, estrategia y analytics pueden generar impacto en tu organización</p>
        <a href="mailto:contacto@lens.mx" className="bg-white text-[#4A25A9] px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100">
          Escríbenos
        </a>
      </section>
    </div>
  )
}
