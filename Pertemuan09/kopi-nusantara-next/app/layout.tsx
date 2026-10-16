import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Boostrap
import "./globals.css";

export const metadata: Metadata = {
  title: "Kopi Nusantara - Kedai Kopi Rumahan",
  description:
    "Kopi Nusantara menghadirkan biji kopi pilihan dari pelosok Indonesia, diseduh langsung setiap hari tanpa bahan pengawet.",
};

// Agar breakpoint boostrap bekerja di mobile dengan baik
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}