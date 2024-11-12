import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Echos",
  description: "Projeto para o Global Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
