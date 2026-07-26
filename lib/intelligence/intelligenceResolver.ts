import {
  recallIntelligence
} from "./recall";


import {
  generateIntelligence
} from "./intelligenceOrchestrator";



export async function resolveIntelligence(
  subject:string
) {


  const memory =
    recallIntelligence(
      subject
    );


  if (
    memory.found &&
    memory.interpretations &&
    memory.interpretations.length > 0
  ) {

    return {

      source:
        "MEMORY",

      ...memory

    };

  }



  const generated =
    await generateIntelligence(
      subject
    );


  return {

    source:
      "GENERATED",

    subject,

    interpretations:
      generated

  };

}
