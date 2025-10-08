import type { Metadata } from "next";
import "./globals.css";
import { Inter, Dancing_Script } from "next/font/google";
import Nav from "@/components/Nav";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  weight: "700",
  variable: "--font-dancing-script"
});

export const metadata: Metadata = {
  title: "The Adventurer Guy — Pedro Britos",
  description: "Cinematic outdoor films, travel guides, and gear by Pedro Britos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={`${inter.className} ${dancingScript.variable}`}>
        <GoogleAnalytics />
        <Nav />
        <main>{children}</main>
        <CookieBanner />
      </body>
    </html>
  );
}
