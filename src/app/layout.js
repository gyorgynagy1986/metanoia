import Nav from "@/components/Nav/Nav";
import Footer from "@/Layouts/Fotter/Footer";
import { main } from "./font";
import "./globals.css";

export const metadata = {
  title: "Holisztikus masszázs terápia - Metanoia terápia",
  description: "Hangtálas oldás, megerősítő kártya, speciális illóolajok és egy különleges masszázs fúziója  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={main.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
