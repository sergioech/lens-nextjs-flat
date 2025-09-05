import "./globals.css";

export const metadata = {
  title: "LENS",
  description: "Decisiones más precisas con AI, estrategia y analytics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="navbar">
          <div className="text-xl font-bold text-blue-600">LENS</div>
          <nav className="nav-links">
            <a href="#">Expertise</a>
            <a href="#">Industrias</a>
            <a href="#">Resultados</a>
            <a href="#">Contacto</a>
          </nav>
          <a href="#" className="cta-btn">Agenda demo</a>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
