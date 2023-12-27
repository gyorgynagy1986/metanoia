import { Analytics } from '@vercel/analytics/react';
import Nav from "@/components/Nav/Nav";
import Footer from "@/Layouts/Footer/Footer";
import { main } from "./font";
import "./globals.css";
import MobileNav from '@/components/Mobile/MobileNav/MobileNav'

export const metadata = {
  title: "Holisztikus masszázs terápia - Metanoia terápia",
  description: "Hangtálas oldás, megerősítő kártya, speciális illóolajok és egy különleges masszázs fúziója  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={main.className}>
        <MobileNav />
        <div style={{height:'10rem'}}></div>
        <Nav />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
