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
            <div className="text-2xl font-bold text-primary">LENS</div>
            <ul className="flex space-x-6 text-text-secondary font-medium">
              <li>
                <a href="#expertise" className="hover:text-primary">Expertise</a>
              </li>
              <li>
                <a href="#industrias" className="hover:text-primary">Industrias</a>
              </li>
              <li>
                <a href="#impacto" className="hover:text-primary">Impacto</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary">Contacto</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-primary text-white py-8 mt-20">
          <div className="container mx-auto text-center">
            <p>© 2025 LENS. Todos los derechos reservados.</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" className="hover:text-accent">LinkedIn</a>
              <a href="#" className="hover:text-accent">Twitter</a>
              <a href="#" className="hover:text-accent">Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
