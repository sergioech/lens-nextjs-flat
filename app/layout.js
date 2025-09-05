import './globals.css'

export const metadata = {
  title: 'LENS | AI, Estrategia y Analytics',
  description: 'Consultoría moderna que integra estrategia, AI y analytics para generar impacto real',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Header / Navbar */}
        <header className="bg-white sticky top-0 z-50 shadow-sm">
          <div className="container-max grid grid-cols-3 items-center py-4">
            {/* Logo Left */}
            <div className="flex items-center">
              <div className="text-cyan-600 font-extrabold text-xl">LENS</div>
            </div>

            {/* Center nav (centrado) */}
            <nav className="flex justify-center">
              <ul className="flex gap-8 text-gray-700 font-medium">
                <li><a href="#expertise" className="hover:text-cyan-600 transition">Expertise</a></li>
                <li><a href="#industrias" className="hover:text-cyan-600 transition">Industrias</a></li>
                <li><a href="#impacto" className="hover:text-cyan-600 transition">Resultados</a></li>
                <li><a href="#contacto" className="hover:text-cyan-600 transition">Contacto</a></li>
              </ul>
            </nav>

            {/* CTA Right */}
            <div className="flex justify-end">
              <a href="#contacto" className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:opacity-95 transition">
                Agenda demo
              </a>
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
