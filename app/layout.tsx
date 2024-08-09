import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { useEffect } from "react";
import AnimatedLayout from "@/components/animation/AnimatedLayout";
import Footer from "@/components/common/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Hive",
  description: "Dream-Connection-Growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}
            
      ${inter.variable}`}
      >
        <AnimatedLayout>
          <Navbar />
          {children}
          <Footer />
        </AnimatedLayout>
      </body>
    </html>
  );
}
