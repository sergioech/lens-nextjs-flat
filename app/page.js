import { LineChart, Lightbulb, ShoppingBag, Building2, HeartPulse, ShieldCheck, Banknote, Car, TrendingUp, BarChart3, Activity, Network, Rocket, Database, Brain, Cloud } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-cyan-600">LENS</div>
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#expertise" className="hover:text-cyan-500 transition">Expertise</a>
            <a href="#industrias" className="hover:text-cyan-500 transition">Industrias</a>
            <a href="#resultados" className="hover:text-cyan-500 transition">Resultados</a>
            <a href="#contacto" className="hover:text-cyan-500 transition">Contacto</a>
          </nav>
          <a href="#contacto" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 px-4 rounded-xl shadow hover:opacity-90 transition">
            Agenda demo
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-800 text-white">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Decisiones más precisas con AI, Estrategia y Analytics
          </h1>
          <p className="text-lg max-w-2xl mb-8 mx-auto">
            LENS combina consultoría estratégica, inteligencia artificial y smart analytics para ofrecer soluciones innovadoras y accionables.
          </p>
          <a href="#contacto" className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-md hover:opacity-90 transition">
            Agenda una demo de AI
          </a>
        </div>
      </section>

      {/* Expertise Section agrupada con diseño compacto */}
      <section id="expertise" className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-700">Áreas de Expertise</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Grupo 1 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">AI & Analytics</h3>
            <ul className="space-y-3 text-center">
              <li className="flex items-center justify-center space-x-2 text-gray-700"><Brain className="text-cyan-600" size={20}/> <span>AI & Machine Learning</span></li>
              <li className="flex items-center justify-center space-x-2 text-gray-700"><LineChart className="text-orange-500" size={20}/> <span>Analytics Avanzado</span></li>
              <li className="flex items-center justify-center space-x-2 text-gray-700"><Activity className="text-pink-500" size={20}/> <span>Modelos Predictivos</span></li>
              <li className="flex items-center justify-center space-x-2 text-gray-700"><Database className="text-cyan-600" size={20}/> <span>Data Platforms</span></li>
            </ul>
          </div>

          {/* Grupo 2 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Estrategia & Crecimiento</h3>
            <ul className="space-y-3 text-center">
              <li className="flex items-center justify-center space-x-2 text-gray-700"><Lightbulb className="text-pink-500" size={20}/> <span>Estrategia de Negocio</span></li>
              <li className="flex items-center justify-center space-x-2 text-gray-700"><Rocket className="text-cyan-600" size={20}/> <span>Crecimiento & Go-to-Market</span></li>
              <li className="flex items-center justify-center space-x-2 text-gray-700"><Cloud className="text-orange-500" size={20}/> <span>Transformación Digital</span></li>
              <li className="flex items-center justify-center space-x-2 text-gray-700"><Network className="text-pink-500" size={20}/> <span>Organización & Operaciones</span></li>
            </ul>
          </div>

          {/* Grupo 3 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Riesgo & Optimización</h3>
            <ul className="space-y-3 text-center">
              <li className="flex items-center justify-center space-x-2 text-gray-700"><BarChart3 className="text-cyan-600" size={20}/> <span>Pricing & Elasticidades</span></li>
              <li className="flex items-center justify-center space-x-2 text-gray-700"><Building2 className="text-pink-500" size={20}/> <span>Optimización de Ubicaciones</span></li>
              <li className="flex items-center justify-center space-x-2 text-gray-700"><ShieldCheck className="text-orange-500" size={20}/> <span>Riesgo Crediticio</span></li>
              <li className="flex items-center justify-center space-x-2 text-gray-700"><ShoppingBag className="text-cyan-600" size={20}/> <span>Retail & Consumo Inteligente</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industrias Section */}
      <section id="industrias" className="bg-gradient-to-r from-indigo-50 to-cyan-50 py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-700">Industrias</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Retail & Consumo", icon: <ShoppingBag size={40} className="text-cyan-600" /> },
            { name: "Real Estate / Centros comerciales", icon: <Building2 size={40} className="text-pink-500" /> },
            { name: "Salud", icon: <HeartPulse size={40} className="text-orange-500" /> },
            { name: "Seguros", icon: <ShieldCheck size={40} className="text-cyan-600" /> },
            { name: "Servicios financieros", icon: <Banknote size={40} className="text-pink-500" /> },
            { name: "Automotriz & Movilidad", icon: <Car size={40} className="text-orange-500" /> },
          ].map((industry) => (
            <div
              key={industry.name}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center border border-gray-100"
            >
              {industry.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">{industry.name}</h3>
              <p className="text-sm text-gray-600">Casos de uso de AI y analytics para {industry.name.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Casos de éxito Section */}
      <section id="resultados" className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-700">Resultados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border-b-4 border-cyan-500">
            <TrendingUp className="mx-auto mb-4 text-cyan-600" size={40} />
            <p className="text-lg font-semibold mb-2">+25% ventas proyectadas</p>
            <p className="text-sm text-gray-600">Priorizando centros comerciales con modelos de AI.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border-b-4 border-pink-500">
            <Activity className="mx-auto mb-4 text-pink-500" size={40} />
            <p className="text-lg font-semibold mb-2">-30% riesgo crediticio</p>
            <p className="text-sm text-gray-600">Scoring predictivo de clientes sin historial previo.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border-b-4 border-orange-500">
            <BarChart3 className="mx-auto mb-4 text-orange-500" size={40} />
            <p className="text-lg font-semibold mb-2">Elasticidades precisas</p>
            <p className="text-sm text-gray-600">Modelos log-log para decisiones de pricing.</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-20 text-center px-6 relative">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">¿Listo para impulsar tu negocio con AI?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Agenda una demo personalizada y descubre cómo LENS ayuda a tomar decisiones de forma más precisa.</p>
          <a href="mailto:contacto@lens.mx" className="bg-white text-pink-600 font-semibold py-3 px-6 rounded-2xl shadow-md hover:bg-gray-100 transition">Contáctanos</a>
        </div>
      </section>
    </div>
  );
}
