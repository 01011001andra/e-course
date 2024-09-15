import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";
import Support from "@/components/Support";

const inter = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ height: "100vh", position: "relative" }}
      >
        <Support />
        {children}
      </body>
    </html>
  );
}
