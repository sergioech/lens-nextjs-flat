import {
  Brain,
  LineChart,
  Activity,
  Database,
  Lightbulb,
  Rocket,
  Cloud,
  Network,
  BarChart3,
  Building2,
  ShieldCheck,
  ShoppingBag
} from 'lucide-react'

export default function Home() {
  return (
    <div>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* === Expertise - Grupo 1 === */}
      <section className="py-10">
        <div className="container-max">
          <h2 className="text-2xl font-semibold text-center mb-8">AI & Analytics</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <article className="bg-white rounded-2xl card-top card-shadow p-5 border-t-4 border-cyan-400 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="card-icon text-cyan-600">
                  <Brain size={22}/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold card-title">AI & Machine Learning</h3>
                  <p className="text-sm text-gray-600 card-sub mt-1">Soluciones en AI & machine learning.</p>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl card-top card-shadow p-5 border-t-4 border-orange-400 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="card-icon text-orange-500">
                  <LineChart size={22}/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold card-title">Analytics Avanzado</h3>
                  <p className="text-sm text-gray-600 card-sub mt-1">Soluciones en analytics avanzado.</p>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl card-top card-shadow p-5 border-t-4 border-pink-400 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="card-icon text-pink-500">
                  <Activity size={22}/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold card-title">Modelos Predictivos</h3>
                  <p className="text-sm text-gray-600 card-sub mt-1">Soluciones en modelos predictivos.</p>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl card-top card-shadow p-5 border-t-4 border-cyan-400 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="card-icon text-cyan-600">
                  <Database size={22}/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold card-title">Data Platforms</h3>
                  <p className="text-sm text-gray-600 card-sub mt-1">Soluciones en plataformas de datos.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* === Expertise - Grupo 2 === */}
      <section className="py-8">
        <div className="container-max">
          <h2 className="text-2xl font-semibold text-center mb-8">Estrategia & Crecimiento</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <article className="bg-white rounded-2xl card-top card-shadow p-5 border-t-4 border-pink-400 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="card-icon text-pink-500">
                  <Lightbulb size={22}/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold card-title">Estrategia de Negocio</h3>
                  <p className="text-sm text-gray-600 card-sub mt-1">Expertise en estrategia de negocio.</p>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl card-top card-shadow p-5 border-t-4 border-cyan-400 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="card-icon text-cyan-600">
                  <Rocket size={22}/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold card-title">Crecimiento & Go-to-Market</h3>
                  <p className="text-sm text-gray-600 card-sub mt-1">Estrategias de crecimiento y lanzamiento al mercado.</p>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl card-top card-shadow p-5 border-t-4 border-orange-400 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="card-icon text-orange-500">
                  <Cloud size={22}/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold card-title">Transformación Digital</h3>
                  <p className="text-sm text-gray-600 card-sub mt-1">Expertise en transformación digital.</p>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl card-top card-shadow p-5 border-t-4 border-pink-400 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="card-icon text-pink-500">
                  <Network size={22}/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold card-title">Organización & Operaciones</h3>
                  <p className="text-sm text-gray-600 card-sub mt-1">Expertise en organización y operaciones.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* === Expertise - Grupo 3 === */}
      <section className="py-8 pb-16">
        <div className="container-max">
          <h2 className="text-2xl font-semibold text-center mb-8">Riesgo & Optimización</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <article className="bg-white rounded-2xl card-top card-shadow p-5 border-t-4 border-cyan-400 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="card-icon text-cyan-600">
                  <BarChart3 size={22}/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold card-title">Pricing & Elasticidades</h3>
                  <p className="text-sm text-gray-600 card-sub mt-1">Soluciones en pricing & elasticidades.</p>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl card-top card-shadow p-5 border-t-4 border-pink-400 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="card-icon text-pink-500">
                  <Building2 size={22}/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold card-title">Optimización de Ubicaciones</h3>
                  <p className="text-sm text-gray-600 card-sub mt-1">Soluciones en optimización de ubicaciones.</p>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl card-top card-shadow p-5 border-t-4 border-orange-400 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="card-icon text-orange-500">
                  <ShieldCheck size={22}/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold card-title">Riesgo Crediticio</h3>
                  <p className="text-sm text-gray-600 card-sub mt-1">Soluciones en riesgo crediticio.</p>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl card-top card-shadow p-5 border-t-4 border-cyan-400 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="card-icon text-cyan-600">
                  <ShoppingBag size={22}/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold card-title">Retail & Consumo Inteligente</h3>
                  <p className="text-sm text-gray-600 card-sub mt-1">Soluciones en retail & consumo inteligente.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

    </div>
  )
}
