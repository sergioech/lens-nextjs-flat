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
            <div className="text-2xl font-bold text-cyan-600">LENS</div>
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li><a href="#expertise" className="hover:text-cyan-600">Expertise</a></li>
              <li><a href="#industrias" className="hover:text-cyan-600">Industrias</a></li>
              <li><a href="#impacto" className="hover:text-cyan-600">Impacto</a></li>
              <li><a href="#contacto" className="hover:text-cyan-600">Contacto</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
