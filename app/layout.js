import './globals.css';

export const metadata = {
  title: 'LENS | AI, Estrategia y Analytics',
  description: 'Consultoría moderna que integra estrategia, AI y analytics para generar impacto real',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Header Sticky */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="text-2xl font-bold text-primary">LENS</div>
            <ul className="flex space-x-6 text-dark font-medium">
              <li><a href="#services" className="hover:text-primary transition">Expertise</a></li>
              <li><a href="#industries" className="hover:text-primary transition">Industrias</a></li>
              <li><a href="#impact" className="hover:text-primary transition">Impacto</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contacto</a></li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-dark text-white py-8 text-center">
          <p>&copy; {new Date().getFullYear()} LENS. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  )
}
