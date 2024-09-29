import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Calendario Bicos",
  description: "Um simples calendario",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
