export type EvolutionChange =
  | "REINFORCED"
  | "CONTEXT_EXPANSION"
  | "UNDERSTANDING_SHIFT"
  | "NEW_INFORMATION";


export function classifyEvolution(
  previous:any,
  current:any
): EvolutionChange {


  if (
    !previous &&
    current
  ) {

    return "NEW_INFORMATION";

  }


  if (
    previous?.summary === current?.summary
  ) {

    return "REINFORCED";

  }


  const previousLength =
    previous?.summary?.length ?? 0;


  const currentLength =
    current?.summary?.length ?? 0;



  if (
    currentLength > previousLength
  ) {

    return "CONTEXT_EXPANSION";

  }



  return "UNDERSTANDING_SHIFT";

}
