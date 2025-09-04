"use client";

import { FaChartLine, FaCogs, FaUsers, FaCheckCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Home() {

  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <div>

      {/* Hero Section */}
      <section className="relative bg-primary text-white h-screen flex items-center justify-center">
        <div className="text-center px-6 fade-in">
          <h1 className="text-5xl font-serif mb-4">Transformamos tu negocio con soluciones estratégicas</h1>
          <p className="text-xl mb-8 text-light">Consultoría en estrategia, operaciones, tecnología y más</p>
          <a href="#services" className="bg-medium text-white py-3 px-6 rounded-full text-lg hover:bg-accent transition transform hover:-translate-y-1">
            Descubre nuestros servicios
          </a>
        </div>
      </section>

      {/* Expertise / Áreas de Servicio */}
      <section id="services" className="py-24 bg-light">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-serif mb-12 text-primary fade-in">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 ${loaded ? 'fade-in' : ''}`}>
              <FaChartLine className="text-5xl text-medium mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2 text-dark">Estrategia</h3>
              <p className="text-dark">Planes estratégicos para un crecimiento sostenible.</p>
            </div>
            <div className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 ${loaded ? 'fade-in' : ''}`}>
              <FaCogs className="text-5xl text-medium mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2 text-dark">Operaciones</h3>
              <p className="text-dark">Optimizamos procesos para mejorar la eficiencia operativa.</p>
            </div>
            <div className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 ${loaded ? 'fade-in' : ''}`}>
              <FaUsers className="text-5xl text-medium mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2 text-dark">Tecnología</h3>
              <p className="text-dark">Implementamos soluciones tecnológicas innovadoras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrias */}
      <section id="industries" className="py-24 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-serif mb-12 text-primary fade-in">Industrias en las que trabajamos</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">Retail</div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">Servicios financieros</div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">Salud</div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">Real Estate</div>
          </div>
        </div>
      </section>

      {/* Resultados / Impacto */}
      <section id="impact" className="py-24 bg-dark text-white text-center">
        <h2 className="text-4xl font-serif mb-12 fade-in">Resultados que generan impacto</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="bg-primary p-8 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition transform">
            <FaCheckCircle className="text-accent text-4xl mb-3" />
            <h3 className="text-4xl font-bold mb-2">+20%</h3>
            <p>Aumento en ventas con modelos de predicción de demanda</p>
          </div>
          <div className="bg-primary p-8 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition transform">
            <FaCheckCircle className="text-accent text-4xl mb-3" />
            <h3 className="text-4xl font-bold mb-2">-15%</h3>
            <p>Reducción de costos logísticos aplicando optimización avanzada</p>
          </div>
          <div className="bg-primary p-8 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition transform">
            <FaCheckCircle className="text-accent text-4xl mb-3" />
            <h3 className="text-4xl font-bold mb-2">+30%</h3>
            <p>Mejora en adquisición de clientes en banca digital</p>
          </div>
        </div>
      </section>

      {/* Contacto / CTA */}
      <section id="contact" className="py-24 bg-medium text-white text-center">
        <h2 className="text-4xl font-serif mb-6 fade-in">¿Listo para transformar tu negocio?</h2>
        <p className="mb-8">Hablemos de cómo AI, estrategia y analytics pueden generar impacto en tu organización</p>
        <a href="mailto:contacto@lens.mx" className="bg-accent text-white py-3 px-6 rounded-full text-lg hover:bg-primary transition transform hover:-translate-y-1">
          Escríbenos
        </a>
      </section>

    </div>
  );
}
