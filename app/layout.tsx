import type { Metadata } from "next";
import "./globals.css";
import { archivo_narrow } from "./fonts";

export const metadata: Metadata = {
  title: "Next.js portfolio",
  description: "Portfolio made with Next.js, Tailwind, Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo_narrow.className}>{children}</body>
    </html>
  );
}
