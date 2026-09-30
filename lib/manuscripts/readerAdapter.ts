import type { ReaderManuscript } from "@dark-sloth/reader-types";

import { manuscriptToPublication } from "./adapter";

export interface ReaderIdentity {
  series: string;
  volume: string;
}

export function manuscriptToReader(
  id: string,
  identity?: ReaderIdentity
): ReaderManuscript | null {
  const publication = manuscriptToPublication(id, identity);

  if (!publication) {
    return null;
  }

  return {
    id,
    title: publication.metadata.title,
    volume: identity?.volume ?? publication.metadata.edition,
    chapters: publication.chapters.map((chapter) => ({
      id: chapter.id,
      title: chapter.title,
      blocks: [
        ...(("openingQuestion" in chapter && chapter.openingQuestion)
          ? [{
              type: "quote" as const,
              content: chapter.openingQuestion
            }]
          : []),
        {
          type: "paragraph" as const,
          content: chapter.content
        },
        ...(("recovery" in chapter && chapter.recovery)
          ? [{
              type: "recovery" as const
            }]
          : [])
      ]
    }))
  };
}
