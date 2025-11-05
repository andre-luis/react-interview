import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Interview App",
  description: "A Next.js application with menu and components",
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
