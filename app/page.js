import { Brain, LineChart, Activity, Database, Lightbulb, Rocket, MonitorSmartphone, Workflow, BarChart4, MapPin, ShieldCheck, ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <div className="py-12 px-6">
      {/* AI & Analytics */}
      <h2 className="text-2xl font-bold text-center mb-8">AI & Analytics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card icon={<Brain />} color="cyan" title="AI & Machine Learning" desc="Soluciones en AI & machine learning." />
        <Card icon={<LineChart />} color="cyan" title="Analytics Avanzado" desc="Soluciones en analytics avanzado." />
        <Card icon={<Activity />} color="cyan" title="Modelos Predictivos" desc="Soluciones en modelos predictivos." />
        <Card icon={<Database />} color="cyan" title="Data Platforms" desc="Soluciones en plataformas de datos." />
      </div>

      {/* Estrategia & Crecimiento */}
      <h2 className="text-2xl font-bold text-center mb-8">Estrategia & Crecimiento</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card icon={<Lightbulb />} color="pink" title="Estrategia de Negocio" desc="Expertise en estrategia de negocio." />
        <Card icon={<Rocket />} color="pink" title="Crecimiento & Go-to-Market" desc="Expertise en crecimiento & go-to-market." />
        <Card icon={<MonitorSmartphone />} color="pink" title="Transformación Digital" desc="Expertise en transformación digital." />
        <Card icon={<Workflow />} color="pink" title="Organización & Operaciones" desc="Expertise en organización & operaciones." />
      </div>

      {/* Riesgo & Optimización */}
      <h2 className="text-2xl font-bold text-center mb-8">Riesgo & Optimización</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card icon={<BarChart4 />} color="orange" title="Pricing & Elasticidades" desc="Soluciones en pricing & elasticidades." />
        <Card icon={<MapPin />} color="orange" title="Optimización de Ubicaciones" desc="Soluciones en optimización de ubicaciones." />
        <Card icon={<ShieldCheck />} color="orange" title="Riesgo Crediticio" desc="Soluciones en riesgo crediticio." />
        <Card icon={<ShoppingBag />} color="orange" title="Retail & Consumo Inteligente" desc="Soluciones en retail & consumo inteligente." />
      </div>
    </div>
  );
}

function Card({ icon, color, title, desc }) {
  const colors = {
    cyan: "border-cyan-400 bg-cyan-50 text-cyan-600",
    pink: "border-pink-400 bg-pink-50 text-pink-600",
    orange: "border-orange-400 bg-orange-50 text-orange-600",
  };

  return (
    <article className="bg-white rounded-2xl shadow p-6 border-t-4">
      <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${colors[color]}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </article>
  );
}
