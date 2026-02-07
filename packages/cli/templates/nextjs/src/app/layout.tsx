import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ValueRail App",
  description: "Created with ValueRail CLI",
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
