import {
  generateContextInterpretation
} from "./contextGenerator";

import {
  generateRelationshipInterpretation
} from "./relationshipGenerator";

import {
  generateHistoricalInterpretation
} from "./historicalGenerator";


export function generateSynthesis(
  canonicalId:string
) {


  const context =
    generateContextInterpretation(
      canonicalId
    );


  const relationships =
    generateRelationshipInterpretation(
      canonicalId
    );


  const historical =
    generateHistoricalInterpretation(
      canonicalId
    );



  return {

    type:
      "INTELLIGENCE_SYNTHESIS",

    summary:
      [
        context?.summary,

        relationships?.summary,

        historical?.summary

      ]
      .filter(Boolean)
      .join(" ")

  };

}


export const generateSynthesisInterpretation =
  generateSynthesis;
