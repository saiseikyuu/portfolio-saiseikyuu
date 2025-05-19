import type { Metadata } from "next";
import { Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

const zen_old_mincho = Zen_Old_Mincho({
  variable: "--font-zen-old-mincho",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Saiseikyuu",
  description: "Portfolio of Saiseikyuu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${zen_old_mincho.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
