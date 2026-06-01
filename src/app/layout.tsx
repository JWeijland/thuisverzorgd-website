import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Thuisverzorgd — Word buddy in de zorg",
    template: "%s · Thuisverzorgd",
  },
  description:
    "Thuisverzorgd verbindt ouderen met buddies in de buurt. Verdien geld, bouw zorgervaring op en help mensen thuis — flexibel, dichtbij en met gegarandeerde kwaliteit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${montserrat.variable} ${openSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
