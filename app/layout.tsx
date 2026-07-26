import "./globals.css";


export const metadata = {

  title:
    "Dark Sloth Archive",

  description:
    "The Living Archive"

};



const navigation = [

  {
    name:"Archive",
    href:"/"
  },

  {
    name:"Books",
    href:"/books"
  },

  {
    name:"Collections",
    href:"/collections"
  },

  {
    name:"Records",
    href:"/records"
  },

  {
    name:"Recoveries",
    href:"/recoveries"
  },

  {
    name:"Identity",
    href:"/identity"
  },

  {
    name:"Platform",
    href:"/platform"
  },

  {
    name:"Creator",
    href:"/creator/publishing"
  }

];



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

        <header>

          <nav>

            {
              navigation.map(
                item => (

                  <a
                    key={item.href}
                    href={item.href}
                  >
                    {item.name}
                  </a>

                )
              )
            }

          </nav>

        </header>


        <main>

          {children}

        </main>


      </body>

    </html>

  );

}
