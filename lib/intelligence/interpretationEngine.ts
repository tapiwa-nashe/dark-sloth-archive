import {
  saveInterpretation,
  getInterpretations,
  type InterpretationRecord
} from "./interpretationMemory";



export type InterpretationType =
  | "CONTEXT_RECONSTRUCTION"
  | "RELATIONSHIP_ANALYSIS"
  | "HISTORICAL_SUMMARY"
  | "INTELLIGENCE_SYNTHESIS";



export function createInterpretationRecord(
  subject: string,
  type: InterpretationType,
  summary: string
) {


  const record: InterpretationRecord = {

    id:
      `INT-${subject}-${type}`,

    subject,

    type,

    summary,

    createdAt:
      new Date()
        .toISOString()

  };


  return saveInterpretation(
    record
  );

}



export function getInterpretationHistory(
  subject: string
) {

  return getInterpretations(
    subject
  );

}



export function compareInterpretations(
  subject: string
) {

  const records =
    getInterpretations(
      subject
    );


  return {

    subject,

    count:
      records.length,

    types:
      records.map(
        record =>
          record.type
      ),

    history:
      records

  };

}
