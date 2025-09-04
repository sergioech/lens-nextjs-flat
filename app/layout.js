import '../globals.css'

export const metadata = {
  title: 'Lens - AI & Estrategia',
  description: 'Decisiones más precisas con AI, Estrategia y Analytics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <header className="bg-purple-900 text-white p-6">
          <h1 className="text-3xl font-bold">Lens</h1>
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
        <footer className="bg-gray-100 text-gray-700 p-4 text-center">
          © 2025 Lens. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  )
}
