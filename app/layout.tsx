import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brissys Botox",
  description: "Brissys Botox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en">
      <body>
        <Navbar />
        <main className={inter.className} >{children}
       
        </main>
        <Footer />
      </body>
    </html>
  );
}
