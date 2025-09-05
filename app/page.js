import { Brain, LineChart, Activity, Database, Lightbulb, Rocket, Cpu, Workflow, BarChart3, MapPin, ShieldCheck, ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Sección AI & Analytics */}
      <h2 className="section-title">AI & Analytics</h2>
      <div className="cards-grid">
        <article className="card border-cyan-400">
          <div className="card-icon bg-cyan-50 text-cyan-600"><Brain size={22}/></div>
          <h3 className="card-title">AI & Machine Learning</h3>
          <p className="card-sub">Soluciones en AI & machine learning.</p>
        </article>
        <article className="card border-cyan-400">
          <div className="card-icon bg-cyan-50 text-cyan-600"><LineChart size={22}/></div>
          <h3 className="card-title">Analytics Avanzado</h3>
          <p className="card-sub">Soluciones en analytics avanzado.</p>
        </article>
        <article className="card border-cyan-400">
          <div className="card-icon bg-cyan-50 text-cyan-600"><Activity size={22}/></div>
          <h3 className="card-title">Modelos Predictivos</h3>
          <p className="card-sub">Soluciones en modelos predictivos.</p>
        </article>
        <article className="card border-cyan-400">
          <div className="card-icon bg-cyan-50 text-cyan-600"><Database size={22}/></div>
          <h3 className="card-title">Data Platforms</h3>
          <p className="card-sub">Soluciones en plataformas de datos.</p>
        </article>
      </div>

      {/* Sección Estrategia & Crecimiento */}
      <h2 className="section-title">Estrategia & Crecimiento</h2>
      <div className="cards-grid">
        <article className="card border-pink-400">
          <div className="card-icon bg-pink-50 text-pink-600"><Lightbulb size={22}/></div>
          <h3 className="card-title">Estrategia de Negocio</h3>
          <p className="card-sub">Expertise en estrategia de negocio.</p>
        </article>
        <article className="card border-pink-400">
          <div className="card-icon bg-pink-50 text-pink-600"><Rocket size={22}/></div>
          <h3 className="card-title">Crecimiento & Go-to-Market</h3>
          <p className="card-sub">Expertise en crecimiento & go-to-market.</p>
        </article>
        <article className="card border-pink-400">
          <div className="card-icon bg-pink-50 text-pink-600"><Cpu size={22}/></div>
          <h3 className="card-title">Transformación Digital</h3>
          <p className="card-sub">Expertise en transformación digital.</p>
        </article>
        <article className="card border-pink-400">
          <div className="card-icon bg-pink-50 text-pink-600"><Workflow size={22}/></div>
          <h3 className="card-title">Organización & Operaciones</h3>
          <p className="card-sub">Expertise en organización & operaciones.</p>
        </article>
      </div>

      {/* Sección Riesgo & Optimización */}
      <h2 className="section-title">Riesgo & Optimización</h2>
      <div className="cards-grid">
        <article className="card border-orange-400">
          <div className="card-icon bg-orange-50 text-orange-600"><BarChart3 size={22}/></div>
          <h3 className="card-title">Pricing & Elasticidades</h3>
          <p className="card-sub">Soluciones en pricing & elasticidades.</p>
        </article>
        <article className="card border-orange-400">
          <div className="card-icon bg-orange-50 text-orange-600"><MapPin size={22}/></div>
          <h3 className="card-title">Optimización de Ubicaciones</h3>
          <p className="card-sub">Soluciones en optimización de ubicaciones.</p>
        </article>
        <article className="card border-orange-400">
          <div className="card-icon bg-orange-50 text-orange-600"><ShieldCheck size={22}/></div>
          <h3 className="card-title">Riesgo Crediticio</h3>
          <p className="card-sub">Soluciones en riesgo crediticio.</p>
        </article>
        <article className="card border-orange-400">
          <div className="card-icon bg-orange-50 text-orange-600"><ShoppingBag size={22}/></div>
          <h3 className="card-title">Retail & Consumo Inteligente</h3>
          <p className="card-sub">Soluciones en retail & consumo inteligente.</p>
        </article>
      </div>
    </div>
  );
}
