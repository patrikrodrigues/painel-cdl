import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agente de Cobrança da CDL | IA para Recuperação de Crédito",
  description: "Descubra como CDLs de todo o Brasil estão revolucionando a cobrança com inteligência artificial. 94% de satisfação dos lojistas e -62% de redução de custos.",
  keywords: ["CDL", "cobrança", "inteligência artificial", "recuperação de crédito", "automação"],
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
