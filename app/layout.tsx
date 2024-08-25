import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
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
  metadataBase: new URL("https://beesinthehive.org"),
  keywords: [
    "Free IGCSE Revision Classes",
    "IGCSE Revision Classes in Myanmar",
    "Non-profit Organization in Myanmar",
    "Youth Empowerment Myanmar",
    "Educational Resources Myanmar",
    "Education and Personal Growth",
    "Free Educational Webinars",
    "Supportive Youth Community",
    "Growth and Inspiration for Youth",
  ],
  title: {
    default: "TheHive",
    template: "%s | TheHive",
  },
  description:
    "The Hive is a youth-driven non-profit organization in Myanmar dedicated to empowering individuals through education and personal growth. We provide a safe and inclusive community where young people can connect, inspire each other, and showcase their talents. Our mission focuses on offering valuable educational resources, promoting personal development, and creating opportunities for youth to thrive. Join us in building a supportive environment that fosters dreams, connections, and growth.",
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
