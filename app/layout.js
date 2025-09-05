import "./globals.css";

export const metadata = {
  title: "LENS",
  description: "Decisiones más precisas con AI, estrategia y analytics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
          <div className="text-xl font-bold text-blue-600">LENS</div>
          <nav className="flex gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Expertise</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Industrias</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Resultados</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contacto</a>
          </nav>
          <a
            href="#"
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded-full shadow hover:opacity-90 transition"
          >
            Agenda demo
          </a>
        </header>
        <main className="max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
