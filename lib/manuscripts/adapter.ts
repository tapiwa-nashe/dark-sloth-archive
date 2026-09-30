import {
  getManuscript
} from "./store";

import {
  formatArchiveEdition
} from "@/lib/editorial/transformers/archiveFormatter";

import {
  archiveDocumentToPublication
} from "@/lib/editorial/adapters/archivePublicationAdapter";

export interface PublicationIdentity {
  series: string;
  volume: string;
}

export function manuscriptToPublication(
  id: string,
  identity?: PublicationIdentity
) {
  const manuscript =
    getManuscript(id);

  if (!manuscript) {
    return null;
  }

  const document =
    formatArchiveEdition({
      title: manuscript.title,
      content: manuscript.content
    });

  return archiveDocumentToPublication(
    document,
    identity
  );
}
