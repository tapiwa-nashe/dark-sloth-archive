import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CVZDE6P2GN"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CVZDE6P2GN');
          `}
        </Script>

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