import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Welcome to Taste Oasis | Culinary Excellence Awaits",
  description:
    "Experience the ultimate dining destination at Taste Oasis. Indulge in our exquisite menu, exceptional service, and inviting atmosphere. Join us for an unforgettable culinary journey today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
