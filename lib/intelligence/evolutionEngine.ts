import {
  recordEvolution
} from "./evolution";


import {
  getIntelligenceIndex
} from "./index";



export function evolveIntelligence(
  subject:string,
  interpretation:any
) {


  const index =
    getIntelligenceIndex(
      subject
    );


  const previous =
    index?.latest ?? null;



  const evolution =
    recordEvolution(
      subject,
      previous,
      interpretation
    );


  return {

    subject,

    previous,

    current:
      interpretation,

    evolution

  };

}
