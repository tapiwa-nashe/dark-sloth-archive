import "./globals.css";


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
) {

  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );

}
