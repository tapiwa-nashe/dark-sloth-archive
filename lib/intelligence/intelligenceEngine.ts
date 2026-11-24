import type { Engine } from "@dark-sloth/core";
import {
  generateIntelligence
} from "./intelligenceOrchestrator";
import {
  resolveIntelligence
} from "./intelligenceResolver";
import {
  recallIntelligence
} from "./recall";
import {
  reconstructContext
} from "./archiveGraphBridge";
import {
  evolveIntelligence
} from "./evolutionEngine";

export class IntelligenceEngine implements Engine {
  readonly identity = {
    id: "intelligence.archive",
    name: "Archive Intelligence Engine",
    version: "1.0.0"
  };

  readonly capabilities = [
    {
      id: "intelligence.archive",
      name: "Archive Intelligence",
      description:
        "Generate, resolve, recall, contextualize, and evolve Archive intelligence using the existing intelligence system."
    }
  ];

  health() {
    return {
      healthy: true,
      message:
        "Archive Intelligence Engine connected to the existing intelligence orchestration, memory, graph context, and evolution services."
    };
  }

  generate(canonicalId: string) {
    return generateIntelligence(canonicalId);
  }

  resolve(canonicalId: string) {
    return resolveIntelligence(canonicalId);
  }

  recall(subject: string) {
    return recallIntelligence(subject);
  }

  context(canonicalId: string) {
    return reconstructContext(canonicalId);
  }

  evolve(subject: string, interpretation: any) {
    return evolveIntelligence(
      subject,
      interpretation
    );
  }
}
