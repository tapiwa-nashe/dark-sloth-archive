import "./globals.css";
import ArchiveNav from "../components/ArchiveNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ArchiveNav />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
