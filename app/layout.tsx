import type { Metadata, Viewport } from "next";
import { Comfortaa, Inter } from "next/font/google";
import "./globals.css";
import { BASE_METADATA } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"] });
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

export const metadata = BASE_METADATA;
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${comfortaa.variable} min-h-screen`}>
        <main className="mx-auto flex min-h-screen max-w-full flex-col p-3 lg:max-w-[800px]">
          {children}
        </main>
      </body>
    </html>
  );
}
