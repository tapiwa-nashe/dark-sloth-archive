import type {
ReaderManuscript
} from "@dark-sloth/reader-types";


import {
manuscriptToPublication
} from "./adapter";


export function manuscriptToReader(

id:string

):ReaderManuscript | null {


const publication =
manuscriptToPublication(id);


if(!publication){

return null;

}


return {

id,

title:
publication.metadata.title,

volume:
publication.metadata.edition,

chapters:

publication.chapters.map(

(chapter)=>({

id:
chapter.id,

title:
chapter.title,

blocks:[

...(("openingQuestion" in chapter && chapter.openingQuestion)
?
[
{
type:"quote" as const,
content:
chapter.openingQuestion
}
]
:
[]),


{

type:"paragraph" as const,

content:
chapter.content

},


...(("recovery" in chapter && chapter.recovery)
?
[
{
type:"recovery" as const
}
]
:
[])

]

})

)

};

}
