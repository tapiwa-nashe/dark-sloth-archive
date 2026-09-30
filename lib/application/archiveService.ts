import type { AssistantSession } from "@dark-sloth/types";

import { ArchiveApplication } from "./archiveApplication";
import type { PublishingSource } from "@/lib/publishing/publishingLibraryEngine";

export interface ArchiveServiceOptions {
  session: AssistantSession;
}

export class ArchiveService {
  readonly application: ArchiveApplication;

  constructor(options: ArchiveServiceOptions) {
    this.application = new ArchiveApplication(options.session);
  }

  health() {
    return this.application.health();
  }

  findEntity(id: string) {
    return this.application.knowledgeGraph.findEntity(id);
  }

  findByType(type: Parameters<typeof this.application.knowledgeGraph.findByType>[0]) {
    return this.application.knowledgeGraph.findByType(type);
  }

  findConnections(entityId: string) {
    return this.application.knowledgeGraph.findConnections(entityId);
  }

  traceIdentity(canonicalId: string) {
    return this.application.knowledgeGraph.traceIdentity(canonicalId);
  }

  recallIntelligence(subject: string) {
    return this.application.intelligence.recall(subject);
  }

  resolveIntelligence(subject: string) {
    return this.application.intelligence.resolve(subject);
  }

  reconstructContext(canonicalId: string) {
    return this.application.intelligence.context(canonicalId);
  }

  async publish(
    source: PublishingSource,
    options = {}
  ) {
    return this.application.publishing.publish(source, options);
  }

  async publishToLibrary(
    source: PublishingSource,
    libraryRoot?: string
  ) {
    return this.application.publishing.publishToLibrary(
      source,
      libraryRoot
    );
  }
}
