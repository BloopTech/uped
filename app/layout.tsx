import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "UPED Bureau | Global Education Advisory & Student Mobility",
  description: "A professional education advisory bureau specializing in international student mobility, exchange programs, and academic placements.",
  keywords: "education advisory, student mobility, exchange programs, academic placements, international education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

