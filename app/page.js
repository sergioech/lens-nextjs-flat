'use client';

import { FaRobot, FaChartLine, FaDatabase, FaIndustry } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Home() {

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2E6EBB] to-[#5DA5E0] text-white py-32 px-6 text-center">
        <h1 className="text-6xl font-bold mb-6">Consultoría potenciada con AI</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          LENS integra estrategia, analytics y capacidades de inteligencia artificial
          para que las organizaciones tomen decisiones más precisas y generen impacto real.
        </p>
        <a href="#contacto" className="bg-[#34C759] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#28a745] inline-block">
          Conversemos
        </a>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-24 px-6 bg-[#F5F5F5]">
        <h2 className="text-4xl font-bold text-center mb-16">Nuestras áreas de expertise</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="text-5xl text-[#5DA5E0] mb-4 text-center"><FaRobot /></div>
            <h3 className="text-2xl font-semibold mb-3 text-center">Inteligencia Artificial</h3>
            <p className="text-center">Modelos predictivos, optimización y soluciones avanzadas para transformar decisiones estratégicas.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="text-5xl text-[#5DA5E0] mb-4 text-center"><FaChartLine /></div>
            <h3 className="text-2xl font-semibold mb-3 text-center">Estrategia</h3>
            <p className="text-center">Diseño de estrategias de crecimiento, operaciones y organización con un enfoque data-driven.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="text-5xl text-[#5DA5E0] mb-4 text-center"><FaDatabase /></div>
            <h3 className="text-2xl font-semibold mb-3 text-center">Analytics</h3>
            <p className="text-center">Dashboards, segmentación avanzada y visualización de datos para soportar la toma de decisiones.</p>
          </div>
        </div>
      </section>

      {/* Industrias */}
      <section id="industrias" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Industrias en las que trabajamos</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"><FaIndustry className="text-4xl mb-2 text-[#5DA5E0]"/>Retail</div>
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"><FaIndustry className="text-4xl mb-2 text-[#5DA5E0]"/>Servicios financieros</div>
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"><FaIndustry className="text-4xl mb-2 text-[#5DA5E0]"/>Salud</div>
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"><FaIndustry className="text-4xl mb-2 text-[#5DA5E0]"/>Real Estate</div>
        </div>
      </section>

      {/* Impacto */}
      <section id="impacto" className="py-24 px-6 bg-[#1A3B70] text-white">
        <h2 className="text-4xl font-bold text-center mb-16">Resultados que generan impacto</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="bg-[#2E6EBB] rounded-2xl p-10 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
            <h3 className="text-5xl font-bold mb-3">+20%</h3>
            <p>Aumento en ventas con modelos de predicción de demanda</p>
          </div>
          <div className="bg-[#2E6EBB] rounded-2xl p-10 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
            <h3 className="text-5xl font-bold mb-3">-15%</h3>
            <p>Reducción de costos logísticos aplicando optimización avanzada</p>
          </div>
          <div className="bg-[#2E6EBB] rounded-2xl p-10 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
            <h3 className="text-5xl font-bold mb-3">+30%</h3>
            <p>Mejora en adquisición de clientes en banca digital</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 px-6 bg-[#2E6EBB] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para transformar tu negocio?</h2>
        <p className="mb-8 max-w-2xl mx-auto">Hablemos de cómo AI, estrategia y analytics pueden generar impacto en tu organización</p>
        <a href="mailto:contacto@lens.mx" className="bg-[#34C759] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#28a745] inline-block">
          Escríbenos
        </a>
      </section>
    </div>
  );
}
