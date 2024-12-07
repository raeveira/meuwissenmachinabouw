import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import React from "react";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meuwissen MachineBouw",
  description: "Meuwissen MachineBouw is een bedrijf dat zich specialiseert in het ontwerpen en bouwen van machines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
