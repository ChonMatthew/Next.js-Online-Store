import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Moka Shop",
  description: "A clothing online store for your deepest desires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", instrumentSans.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
