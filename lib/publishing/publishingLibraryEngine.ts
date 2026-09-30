import type { Engine } from "@dark-sloth/core";
import {
  createPublicationRunner,
  MemoryPublicationLoader,
  type PublicationRunOptions
} from "publishing-studio";

import { manuscriptToPublication } from "@/lib/manuscripts/adapter";

export interface PublishingLibraryOperation {
  outputs: string[];
}

export interface PublishingSource {
  manuscriptId: string;
  series?: string;
  volume?: string;
}

export class PublishingLibraryEngine implements Engine {
  readonly identity = {
    id: "publishing.library",
    name: "Publishing Library Engine",
    version: "1.0.0"
  };

  readonly capabilities = [
    {
      id: "publishing.library",
      name: "Publishing Library",
      description:
        "Execute the canonical Publishing Studio publication pipeline from an Archive manuscript."
    }
  ];

  health() {
    return {
      healthy: true,
      message:
        "Publishing Library Engine connected to the Publishing Studio public publication runner."
    };
  }

  async publish(
    source: PublishingSource,
    options: PublicationRunOptions = {}
  ): Promise<PublishingLibraryOperation> {
    if (
      options.publishToLibrary &&
      (!source.series?.trim() || !source.volume?.trim())
    ) {
      throw new Error(
        "Library publication requires explicit source.series and source.volume."
      );
    }

    const publication =
      manuscriptToPublication(
        source.manuscriptId,
        source.series && source.volume
          ? {
              series: source.series,
              volume: source.volume
            }
          : undefined
      );

    if (!publication) {
      throw new Error(
        `Archive manuscript not found: ${source.manuscriptId}`
      );
    }

    const loader =
      new MemoryPublicationLoader(publication);

    const runner =
      createPublicationRunner(loader);

    const outputs =
      await runner.publish(
        publication,
        options
      );

    return {
      outputs
    };
  }

  async publishToLibrary(
    source: PublishingSource,
    libraryRoot?: string
  ): Promise<PublishingLibraryOperation> {
    return this.publish(
      source,
      {
        publishToLibrary: true,
        libraryRoot
      }
    );
  }
}
