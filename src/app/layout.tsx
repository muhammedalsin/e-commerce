import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lider Bilgisayar | Bilgisayar ve Elektronik Ürünler",
  description:
    "Lider Bilgisayar, dizüstü bilgisayarlar, masaüstü bilgisayarlar, bilgisayar bileşenleri ve elektronik aksesuarlar konusunda uzmanlaşmış güvenilir bir satış platformudur.",
  keywords: [
    "Lider Bilgisayar",
    "Bilgisayar",
    "Laptop",
    "Gaming Laptop",
    "Elektronik Aksesuar",
    "Donanım",
    "PC Bileşenleri",
  ],
  authors: [
    { name: "Lider Bilgisayar", url: "https://lider-bilgisayar.vercel.app" },
  ],
  generator: "Next.js",
  applicationName: "Lider Bilgisayar",
  referrer: "origin-when-cross-origin",
  creator: "Lider Bilgisayar Ekibi",
  publisher: "Lider Bilgisayar",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ToastContainer theme="colored" position="top-center" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
