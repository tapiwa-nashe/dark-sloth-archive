import "./globals.css";

import ArchiveNav from "@/components/ArchiveNav";


export const metadata = {

  title:
    "Dark Sloth Archive",

  description:
    "The Living Archive"

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
