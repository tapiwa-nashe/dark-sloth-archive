import { startArchiveRuntime } from "@/lib/runtime";
import { KnowledgeGraphQueryEngine } from "@/lib/knowledge-graph/queryEngine";
import { PublishingLibraryEngine } from "@/lib/publishing/publishingLibraryEngine";
import { IntelligenceEngine } from "@/lib/intelligence/intelligenceEngine";
import type { AssistantSession } from "@dark-sloth/types";

export class ArchiveApplication {
  readonly runtime;

  readonly knowledgeGraph: KnowledgeGraphQueryEngine;
  readonly publishing: PublishingLibraryEngine;
  readonly intelligence: IntelligenceEngine;

  constructor(session: AssistantSession) {
    this.runtime = startArchiveRuntime(session);

    const knowledgeGraph =
      this.runtime.engines.get("knowledge-graph.query");

    const publishing =
      this.runtime.engines.get("publishing.library");

    const intelligence =
      this.runtime.engines.get("intelligence.archive");

    if (!(knowledgeGraph instanceof KnowledgeGraphQueryEngine)) {
      throw new Error(
        "Archive Application requires the Knowledge Graph Query Engine."
      );
    }

    if (!(publishing instanceof PublishingLibraryEngine)) {
      throw new Error(
        "Archive Application requires the Publishing Library Engine."
      );
    }

    if (!(intelligence instanceof IntelligenceEngine)) {
      throw new Error(
        "Archive Application requires the Intelligence Engine."
      );
    }

    this.knowledgeGraph = knowledgeGraph;
    this.publishing = publishing;
    this.intelligence = intelligence;
  }

  isRunning(): boolean {
    return this.runtime.isRunning();
  }

  getEngineCount(): number {
    return this.runtime.engines.count();
  }

  getCapabilityCount(): number {
    return this.runtime.capabilities.count();
  }

  health() {
    return {
      runtime: this.runtime.isRunning(),
      engines: this.runtime.engines.count(),
      capabilities: this.runtime.capabilities.count(),
      knowledgeGraph: this.knowledgeGraph.health(),
      publishing: this.publishing.health(),
      intelligence: this.intelligence.health()
    };
  }
}
