let counters: Record<string, number> = {};

export function generateCanonicalId(
  type: string
): string {

  if (!counters[type]) {
    counters[type] = 1;
  } else {
    counters[type]++;
  }

  return `${type}_${String(counters[type]).padStart(6, "0")}`;
}
