import './globals.css'

export const metadata = {
  title: 'Lens - Estrategia & AI',
  description: 'Sitio de ejemplo sin Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <h1>Lens</h1>
        </header>
        <main>{children}</main>
        <footer>
          © 2025 Lens. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  )
}
