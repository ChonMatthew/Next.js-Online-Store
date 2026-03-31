import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const instrumentSans = Instrument_Sans({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Simple Next.js 13.4 E-Commerce Website",
  description:
    "A simple e-commerce website built with Next.js 13.4, showcasing products and allowing users to browse and purchase items online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", instrumentSans.variable)}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
