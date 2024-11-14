import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { Quicksand, Open_Sans } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

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
    <html lang="pt-br" className={`${quicksand.variable} ${openSans.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
