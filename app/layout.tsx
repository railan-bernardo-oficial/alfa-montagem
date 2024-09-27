import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ImageSeoMidia from "../public/social-midia-seo.jpg";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alfa Montagem - Montador de móveis goiânia",
  description: `montador de moveis goiania
                montador de moveis go 
                montador de moveis em goiania
                montador de moveis aparecida
                montador de moveis aparecida de goiania
                montador de moveis trindade
                montador de moveis em trindade
                montador de moveis
                montador de moveis goianira
                montador de moveis em goianira
                montador de moveis regiao noroeste
                montador de moveis proximo a mim
                montador de moveis profissional
                montador de guarda roupa
                montador de armario
                montador de Mesa
                montador de guarda roupa em goiania
                numero de telefone de montador de moveis
                telefone de montador de moveis
                desmontador de moveis
                empresa de montagem de moveis
                montador de moveis olx
                montador de moveis senador canedo
                montador de moveis em senador canedo
                montador de moveis inhumas
                montador de moveis em inhumas
                alfamontagem`,
  keywords: `montador de moveis goiania
                montador de moveis go 
                montador de moveis em goiania
                montador de moveis aparecida
                montador de moveis aparecida de goiania
                montador de moveis trindade
                montador de moveis em trindade
                montador de moveis
                montador de moveis goianira
                montador de moveis em goianira
                montador de moveis regiao noroeste
                montador de moveis proximo a mim
                montador de moveis profissional
                montador de guarda roupa
                montador de armario
                montador de Mesa
                montador de guarda roupa em goiania
                numero de telefone de montador de moveis
                telefone de montador de moveis
                desmontador de moveis
                empresa de montagem de moveis
                montador de moveis olx
                montador de moveis senador canedo
                montador de moveis em senador canedo
                montador de moveis inhumas
                montador de moveis em inhumas
                alfamontagem`,
  authors: [{name: "Railan Bernardo"}],
  robots: "index, follow",
  openGraph: { description: "Alfa Montagem - Montador de móveis goiânia", albums: `${ImageSeoMidia}` }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
