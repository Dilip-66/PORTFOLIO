
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dilip | Developer & Builder",
  description:
    "The portfolio of Dilip — a developer exploring full-stack engineering, AI, and creative problem solving.",
  applicationName: "Dilip Portfolio",
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
