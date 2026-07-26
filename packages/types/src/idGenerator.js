let counters = {};
export function generateCanonicalId(type) {
    if (!counters[type]) {
        counters[type] = 1;
    }
    else {
        counters[type]++;
    }
    return `${type}_${String(counters[type]).padStart(6, "0")}`;
}
