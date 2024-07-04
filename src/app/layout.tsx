import type { Metadata } from "next";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import localFont from "next/font/local";

const helveticaNeueRegular = localFont({
  src: "../assets/fonts/helvetica_neue_regular.woff2",
});

export const metadata: Metadata = {
  title: "Arete studio",
  description: "Arete studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider>
      <html lang="en">
        <body className={helveticaNeueRegular.className}>{children}</body>
      </html>
    </PrimeReactProvider>
  );
}
