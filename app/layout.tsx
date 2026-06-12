import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BASE_METADATA } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} min-h-screen`}>
        <main className="mx-auto flex min-h-screen max-w-full flex-col p-3 lg:max-w-[800px]">
          {children}
        </main>
      </body>
    </html>
  );
}
