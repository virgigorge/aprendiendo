import { montserrat } from "./fonts";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

export const metadata: Metadata = {
  title: "Aprendiendo",
  description: "Virgilinda's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
