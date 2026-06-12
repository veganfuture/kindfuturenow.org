import type { Metadata, Viewport } from "next";
import { Comfortaa, Inter } from "next/font/google";
import "./globals.css";
import { BASE_METADATA } from "@/lib/metadata";
import { FaYoutube, FaInstagram } from "react-icons/fa";

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
        <footer className="relative left-1/2 mt-auto w-screen -translate-x-1/2 bg-[var(--brand-purple)] py-6 text-white">
          <div className="mx-auto flex w-full max-w-[80%] flex-col items-center justify-between gap-2 px-4 text-sm md:flex-row">
            <p>
              Free to use. No rights reserved. With love from Vegan Future 💚
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.youtube.com/@kindfuturenow"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-[var(--brand-yellow)] hover:text-white transition"
                >
                  <FaYoutube className="h-6 w-6" />
                </a>

                <a
                  href="https://www.instagram.com/kindfuturenow"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[var(--brand-green)] hover:text-white transition"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a
                  href="https://veganfuture.org/contact"
                  className="text-white/85 hover:text-[var(--brand-yellow)]"
                  target="blank"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
