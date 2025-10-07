import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "The Blog",
  description: "A personal blog created with Next.js",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
    children,
  }: Readonly<RootLayoutProps>) {
    
  return (
    <html lang="pt-BR">
      <body
      >
        {children}
      </body>
    </html>
  );
}
