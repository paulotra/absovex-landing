import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Absovex",
  description: "Built with Next.js, TypeScript, Tailwind CSS, and GSAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex flex-col flex-1">{children}</main>
      </body>
    </html>
  );
}
