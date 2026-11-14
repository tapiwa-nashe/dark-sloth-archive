import "./globals.css";

import ArchiveNav from "@/components/ArchiveNav";

export const metadata = {
  metadataBase: new URL("https://darkslotharchive.com"),
  applicationName: "Dark Sloth Archive",
  title: {
    default: "Dark Sloth Archive | A Living Knowledge Institution",
    template: "%s | Dark Sloth Archive",
  },
  description:
    "A public knowledge institution dedicated to the recovery, preservation and responsible interpretation of records, books and source material.",
  keywords: [
    "Dark Sloth Archive",
    "living archive",
    "knowledge preservation",
    "recovery records",
    "public archive",
    "The Dark Sloth Codex",
  ],
  openGraph: {
    type: "website",
    url: "https://darkslotharchive.com",
    siteName: "Dark Sloth Archive",
    title: "Dark Sloth Archive | A Living Knowledge Institution",
    description:
      "Discover collections, records, books and recovered knowledge, with evidence and provenance kept in view.",
    locale: "en_ZA",
    images: [
      {
        url: "/archive/hero-background.jpg",
        width: 1536,
        height: 1024,
        alt: "Dark Sloth Archive — public knowledge institution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/archive/hero-background.jpg"],
    title: "Dark Sloth Archive | A Living Knowledge Institution",
    description:
      "A public knowledge institution for the recovery, preservation and responsible interpretation of knowledge.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout(
  {
    children
  }:{
    children:React.ReactNode
  }
){

  return (

    <html lang="en">

      <body>

        <ArchiveNav />

        <main className="archive-main">

          {children}

        </main>

      </body>

    </html>

  );

}
