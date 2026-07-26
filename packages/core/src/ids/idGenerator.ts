const counters = new Map<string, number>();

export function generateCanonicalId(
  type: string
): string {
  const current =
    counters.get(type) ?? 0;

  const next =
    current + 1;

  counters.set(
    type,
    next
  );

  return `${type}_${String(next).padStart(6, "0")}`;
}
