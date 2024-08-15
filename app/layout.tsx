import type { Metadata } from "next";
import "./globals.css";
import { archivo_narrow } from "./fonts";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wolfgang Lloyd",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo_narrow.className}>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
