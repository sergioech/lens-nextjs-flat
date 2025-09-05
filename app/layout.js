import './globals.css'

export const metadata = {
  title: 'LENS | AI, Estrategia y Analytics',
  description: 'Consultoría moderna que integra estrategia, AI y analytics para generar impacto real',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <div className="container header-inner">
            <div className="text-2xl font-extrabold text-[var(--accent-cyan)]">LENS</div>

            <nav className="hidden md:flex gap-8 nav-links">
              <a href="#expertise">Expertise</a>
              <a href="#industrias">Industrias</a>
              <a href="#impacto">Resultados</a>
              <a href="#contacto">Contacto</a>
            </nav>

            <a href="#contacto" className="cta-btn">Agenda demo</a>
          </div>
        </header>

        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
