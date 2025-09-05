import { Brain, LineChart, Activity, Database, Lightbulb, Rocket, DeviceMobileIcon, Cog, ChartBar, MapPin, ShieldCheck, ShoppingBag } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* spacer for sticky header */}
      <div style={{ height: 8 }} />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>Decisiones más precisas con AI, Estrategia y Analytics</h1>
          <p>LENS combina consultoría estratégica, inteligencia artificial y smart analytics para entregar soluciones accionables que impulsan resultados reales.</p>
          <div style={{ marginTop: 20 }}>
            <a href="#contacto" className="cta-btn">Agenda una demo</a>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <h2 className="text-2xl font-bold text-center mb-8">Áreas de Expertise</h2>

        <div className="grid-cards">
          <article className="card card-cyan">
            <div className="icon"><Brain size={20} /></div>
            <div className="ml-3">
              <h3 className="card-title">AI & Machine Learning</h3>
              <p className="card-sub">Copilotos, predicción y modelos avanzados.</p>
            </div>
          </article>

          <article className="card card-cyan">
            <div className="icon"><LineChart size={20} /></div>
            <div className="ml-3">
              <h3 className="card-title">Analytics Avanzado</h3>
              <p className="card-sub">Visualización y segmentación accionable.</p>
            </div>
          </article>

          <article className="card card-cyan">
            <div className="icon"><Activity size={20} /></div>
            <div className="ml-3">
              <h3 className="card-title">Modelos Predictivos</h3>
              <p className="card-sub">Scoring y forecasting robusto.</p>
            </div>
          </article>

          <article className="card card-cyan">
            <div className="icon"><Database size={20} /></div>
            <div className="ml-3">
              <h3 className="card-title">Data Platforms</h3>
              <p className="card-sub">Pipelines y gestión de datos confiables.</p>
            </div>
          </article>
        </div>

        {/* second row: estrategia */}
        <div style={{ height: 26 }} />

        <div className="grid-cards">
          <article className="card card-pink">
            <div className="icon"><Lightbulb size={20} /></div>
            <div className="ml-3">
              <h3 className="card-title">Estrategia de Negocio</h3>
              <p className="card-sub">Roadmaps y modelos de negocio.</p>
            </div>
          </article>

          <article className="card card-pink">
            <div className="icon"><Rocket size={20} /></div>
            <div className="ml-3">
              <h3 className="card-title">Crecimiento & GTM</h3>
              <p className="card-sub">Experimentación y go-to-market.</p>
            </div>
          </article>

          <article className="card card-pink">
            <div className="icon"><DeviceMobile size={20} /></div>
            <div className="ml-3">
              <h3 className="card-title">Transformación Digital</h3>
              <p className="card-sub">Modernización de experiencia y tech.</p>
            </div>
          </article>

          <article className="card card-pink">
            <div className="icon"><Cog size={20} /></div>
            <div className="ml-3">
              <h3 className="card-title">Organización & Operaciones</h3>
              <p className="card-sub">Optimización de procesos y organización.</p>
            </div>
          </article>
        </div>

        {/* third row: riesgo */}
        <div style={{ height: 26 }} />

        <div className="grid-cards">
          <article className="card card-orange">
            <div className="icon"><ChartBar size={20} /></div>
            <div className="ml-3">
              <h3 className="card-title">Pricing & Elasticidades</h3>
              <p className="card-sub">Estrategias de pricing basadas en data.</p>
            </div>
          </article>

          <article className="card card-orange">
            <div className="icon"><MapPin size={20} /></div>
            <div className="ml-3">
              <h3 className="card-title">Optimización de Ubicaciones</h3>
              <p className="card-sub">Decisiones de ubicación impulsadas por modelos.</p>
            </div>
          </article>

          <article className="card card-orange">
            <div className="icon"><ShieldCheck size={20} /></div>
            <div className="ml-3">
              <h3 className="card-title">Riesgo Crediticio</h3>
              <p className="card-sub">Scoring y mitigación de riesgo.</p>
            </div>
          </article>

          <article className="card card-orange">
            <div className="icon"><ShoppingBag size={20} /></div>
            <div className="ml-3">
              <h3 className="card-title">Retail & Consumo Inteligente</h3>
              <p className="card-sub">Experiencias y optimización de retail.</p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="hero" style={{ paddingTop: 28, paddingBottom: 28 }}>
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">¿Listo para transformar tu negocio?</h2>
          <p className="mb-4">Agenda una demo y te mostramos pilotos y casos reales.</p>
          <a href="mailto:contacto@lens.mx" className="cta-btn">Contáctanos</a>
        </div>
      </section>
    </div>
  )
}
