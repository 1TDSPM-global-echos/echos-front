import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Echos",
  description: "Projeto para o Global Solution",
  icons: {
    icon: "/logo-sem-fundo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
