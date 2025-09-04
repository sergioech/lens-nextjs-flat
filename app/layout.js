export const metadata = {
  title: "LENS",
  description: "Consultoría en AI, estrategia y analytics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
