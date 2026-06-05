import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ArchiveNav from "../components/ArchiveNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dark Sloth Archive",
  description: "Public Archive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>

        <ArchiveNav />

        <main className="container">
          {children}
        </main>

        <footer className="archive-footer">

          <div>
            PUBLIC ARCHIVE
          </div>

          <div>
            VERSION // V1.0
          </div>

          <div>
            NODE // NODE_001
          </div>

          <div>
            STATUS // ACTIVE
          </div>

        </footer>

      </body>
    </html>
  );
}
