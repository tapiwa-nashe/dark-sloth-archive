const counters = new Map();
export function generateCanonicalId(type) {
    const current = counters.get(type) ?? 0;
    const next = current + 1;
    counters.set(type, next);
    return `${type}_${String(next).padStart(6, "0")}`;
}
