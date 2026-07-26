import {
  DarkSlothArchiveProfile
} from "./profile";


export function formatManuscript(
  content:string
){

  const lines =
    content.split("\n");


  const chapters =
    lines.filter(
      line =>
        /^CHAPTER/i.test(
          line.trim()
        )
    );


  const metadata =
    lines.filter(
      line =>
        /^(Recovery Record|STATUS|CLASSIFICATION|FINAL RECOVERY NOTE)/i.test(
          line.trim()
        )
    );


  return {

    profile:
      DarkSlothArchiveProfile,


    structure:{

      chapters:
        chapters.length,

      metadata:
        metadata.length

    },


    content:

      content

  };

}
