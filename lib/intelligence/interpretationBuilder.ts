import {
  reconstructContext
} from "./archiveGraphBridge";

import {
  saveInterpretation
} from "./interpretationMemory";



export function createInterpretation(
  canonicalId: string
) {


  const context =
    reconstructContext(
      canonicalId
    );


  if (!context) {

    return null;

  }



  const interpretation = {

    id:
      `INT-${canonicalId}`,

    subject:
      canonicalId,

    type:
      "CONTEXT_RECONSTRUCTION",

    summary:
      context.summary,

    createdAt:
      new Date()
        .toISOString()

  };



  return saveInterpretation(
    interpretation
  );

}
