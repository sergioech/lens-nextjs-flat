import './globals.css'

export const metadata = {
  title: 'LENS | AI, Estrategia y Analytics',
  description: 'Consultoría moderna que integra estrategia, AI y analytics para generar impacto real',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="text-2xl font-bold text-accent1">LENS</div>
            <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
              <li><a href="#expertise" className="hover:text-accent2 transition">Expertise</a></li>
              <li><a href="#industrias" className="hover:text-accent2 transition">Industrias</a></li>
              <li><a href="#impacto" className="hover:text-accent2 transition">Impacto</a></li>
              <li><a href="#contacto" className="hover:text-accent2 transition">Contacto</a></li>
            </ul>
            {/* Menu mobile */}
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 py-12 mt-20 text-center text-gray-600 text-sm">
          © 2025 LENS. Todos los derechos reservados
        </footer>
      </body>
    </html>
  )
}
