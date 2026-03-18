import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AXIOM",
  description: "The last intelligence you will ever need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}