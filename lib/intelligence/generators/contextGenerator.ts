import {
  reconstructContext
} from "../archiveGraphBridge";


export function generateContextInterpretation(
  canonicalId: string
) {

  const context =
    reconstructContext(
      canonicalId
    );


  if (!context) {

    return null;

  }


  return {

    type:
      "CONTEXT_RECONSTRUCTION",

    summary:
      context.summary

  };

}
