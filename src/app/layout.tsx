import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
