import type { PublicContentEnvelope } from "./contracts";

export type PublicEligibilityFailure =
  | "MISSING_CANONICAL_ID"
  | "MISSING_TITLE"
  | "MISSING_SLUG"
  | "NOT_PUBLISHED"
  | "NOT_PUBLIC"
  | "MISSING_APPROVAL"
  | "MISSING_PUBLICATION_DATE"
  | "WITHDRAWN"
  | "MISSING_PROVENANCE"
  | "INVALID_PROVENANCE"
  | "INVALID_TIMESTAMP";

export interface PublicEligibilityResult {
  eligible: boolean;
  failures: PublicEligibilityFailure[];
}

function isValidTimestamp(value: string | null | undefined): boolean {
  return typeof value === "string" && value.trim().length > 0 &&
    Number.isFinite(Date.parse(value));
}

/** Public content is deny-by-default: missing metadata is never permission. */
export function evaluatePublicEligibility(
  item: Partial<PublicContentEnvelope> | null | undefined,
): PublicEligibilityResult {
  const failures: PublicEligibilityFailure[] = [];

  if (!item || typeof item.canonicalId !== "string" || !item.canonicalId.trim()) {
    failures.push("MISSING_CANONICAL_ID");
  }
  if (!item || typeof item.title !== "string" || !item.title.trim()) {
    failures.push("MISSING_TITLE");
  }
  if (!item || typeof item.slug !== "string" || !item.slug.trim()) {
    failures.push("MISSING_SLUG");
  }
  if (item?.publicationStatus !== "PUBLISHED") failures.push("NOT_PUBLISHED");
  if (item?.visibility !== "PUBLIC") failures.push("NOT_PUBLIC");
  if (!isValidTimestamp(item?.approvedAt)) failures.push("MISSING_APPROVAL");
  if (!isValidTimestamp(item?.publishedAt)) failures.push("MISSING_PUBLICATION_DATE");
  if (item?.withdrawnAt != null) failures.push("WITHDRAWN");

  if (!item?.provenance) {
    failures.push("MISSING_PROVENANCE");
  } else if (
    typeof item.provenance.sourceSystem !== "string" ||
    !item.provenance.sourceSystem.trim() ||
    typeof item.provenance.sourceReference !== "string" ||
    !item.provenance.sourceReference.trim()
  ) {
    failures.push("INVALID_PROVENANCE");
  }

  if (
    (item?.approvedAt != null && !isValidTimestamp(item.approvedAt)) ||
    (item?.publishedAt != null && !isValidTimestamp(item.publishedAt)) ||
    (item?.updatedAt != null && !isValidTimestamp(item.updatedAt))
  ) {
    failures.push("INVALID_TIMESTAMP");
  }

  return { eligible: failures.length === 0, failures };
}

export function isPubliclyEligible(
  item: Partial<PublicContentEnvelope> | null | undefined,
): boolean {
  return evaluatePublicEligibility(item).eligible;
}

export function filterPubliclyEligible<T extends Partial<PublicContentEnvelope>>(
  items: readonly T[],
): T[] {
  return items.filter(isPubliclyEligible);
}
