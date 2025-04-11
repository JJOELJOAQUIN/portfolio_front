import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Joel Joaquín López | Full-Stack Developer",
  description:
    "Desarrollos de software a medida, combinando tecnología e innovación para alcanzar tus objetivos.",
  openGraph: {
    title: "Joel Joaquín López | Full-Stack Developer",
    description:
      "Desarrollos de software a medida, combinando tecnología e innovación para alcanzar tus objetivos.",
    url: "https://portfolio-front-eight.vercel.app",
    siteName: "Joel Joaquín López Portfolio",
    images: [
      {
        url: "https://portfolio-front-eight.vercel.app/preview.jpg", 
        width: 1200,
        height: 630,
        alt: "Imagen de presentación del portfolio de Joel Joaquín López",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Joaquín López | Full-Stack Developer",
    description:
      "Desarrollos de software a medida, combinando tecnología e innovación para alcanzar tus objetivos.",
    images: ["https://portfolio-front-eight.vercel.app/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
