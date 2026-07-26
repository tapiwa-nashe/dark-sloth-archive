import {
  generateContextInterpretation
} from "./generators/contextGenerator";

import {
  generateRelationshipInterpretation
} from "./generators/relationshipGenerator";

import {
  generateHistoricalInterpretation
} from "./generators/historicalGenerator";

import {
  generateSynthesis
} from "./generators/synthesisGenerator";


import {
  saveInterpretation,
  getLatestInterpretation
} from "./memory";

import {
  updateIntelligenceIndex
} from "./index";

import {
  recordEvolution
} from "./evolution";



export async function generateIntelligence(
  canonicalId:string
) {


  const interpretations = [

    {
      subject:
        canonicalId,

      ...generateContextInterpretation(
        canonicalId
      )

    },


    {
      subject:
        canonicalId,

      ...generateRelationshipInterpretation(
        canonicalId
      )

    },


    {
      subject:
        canonicalId,

      ...generateHistoricalInterpretation(
        canonicalId
      )

    },


    {
      subject:
        canonicalId,

      ...generateSynthesis(
        canonicalId
      )

    }

  ];



  const stored =
    interpretations.map(
      interpretation =>
        saveInterpretation(
          interpretation
        )
    );



  updateIntelligenceIndex(
    canonicalId,
    stored
  );



  const previous =
    getLatestInterpretation(
      canonicalId,
      "INTELLIGENCE_SYNTHESIS"
    );


  const current =
    stored.find(
      item =>
        item.type === "INTELLIGENCE_SYNTHESIS"
    );


  recordEvolution(
    canonicalId,
    previous,
    current
  );



  return stored;

}
