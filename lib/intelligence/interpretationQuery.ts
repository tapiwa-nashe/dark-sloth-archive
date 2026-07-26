import {
  getInterpretations
} from "./interpretationMemory";


export function queryInterpretations(
  subject?: string
) {

  return getInterpretations(
    subject
  );

}
