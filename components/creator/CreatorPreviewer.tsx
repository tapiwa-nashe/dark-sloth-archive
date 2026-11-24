import {
  createArchiveBookPreview
} from "@/lib/creator/archiveBookPreview";


type Props = {

  manuscript:{
    id:string;
    title:string;
    content:string;
    status:string;
    createdAt:string;
  };

};



export default function CreatorPreviewer(
{
  manuscript
}:Props
){

  const pages =
    createArchiveBookPreview(
      manuscript
    );


  return (

    <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-8 mb-8">


      <p className="font-mono text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
        CREATOR PREVIEW // ARCHIVE EDITION
      </p>



      <div className="space-y-12">


      {
        pages.map(page => (

          <article
            key={page.number}
            className="
              min-h-[1000px]
              border
              border-neutral-800
              bg-black
              rounded-xl
              p-12
              relative
            "
          >


            <div className="space-y-8">


            {
              page.blocks.map(
                (block,index)=>{


                  switch(block.type){



                    case "title":

                      return (

                        <h1
                          key={index}
                          className="
                            text-5xl
                            font-bold
                            tracking-tight
                          "
                        >
                          {block.text}
                        </h1>

                      );



                    case "chapterHeading":

                      return (

                        <div
                          key={index}
                          className="
                            pt-8
                            pb-4
                            border-b
                            border-neutral-800
                          "
                        >

                          <p className="
                            text-xs
                            uppercase
                            tracking-[0.4em]
                            text-neutral-500
                            mb-3
                          ">
                            CHAPTER
                          </p>


                          <h2
                            className="
                              text-4xl
                              font-bold
                            "
                          >
                            {block.text}
                          </h2>

                        </div>

                      );



                    case "recoveryMarker":

                      return (

                        <p
                          key={index}
                          className="
                            font-mono
                            text-sm
                            uppercase
                            tracking-[0.25em]
                            text-neutral-400
                          "
                        >
                          {block.text}
                        </p>

                      );



                    case "openingQuestion":

                      return (

                        <blockquote
                          key={index}
                          className="
                            border-l
                            border-neutral-700
                            pl-6
                            italic
                            text-neutral-400
                          "
                        >
                          {block.text}
                        </blockquote>

                      );



                    case "heading":

                      return (

                        <h2
                          key={index}
                          className="
                            text-3xl
                            font-semibold
                          "
                        >
                          {block.text}
                        </h2>

                      );



                    case "paragraph":

                      return (

                        <p
                          key={index}
                          className="
                            text-neutral-300
                            leading-8
                            whitespace-pre-wrap
                          "
                        >
                          {block.text}
                        </p>

                      );



                    case "toc":

                      return (

                        <div
                          key={index}
                          className="
                            border
                            border-neutral-800
                            rounded-lg
                            p-6
                          "
                        >

                          <h3 className="text-xl font-semibold mb-4">
                            {block.title}
                          </h3>


                          {
                            block.entries.map(
                              (entry,i)=>(
                                <p
                                  key={i}
                                  className="
                                    text-neutral-400
                                  "
                                >
                                  {entry.title}
                                </p>
                              )
                            )
                          }


                        </div>

                      );



                    default:

                      return null;


                  }


                }
              )

            }


            </div>


            <span
              className="
                absolute
                bottom-6
                right-8
                text-xs
                text-neutral-600
              "
            >
              {String(page.number).padStart(3,"0")}
            </span>


          </article>

        ))
      }


      </div>


    </section>

  );

}
