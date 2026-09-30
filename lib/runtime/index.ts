import {
  CapabilityRegistry,
  EngineRegistry
} from "@dark-sloth/core";

import {
  ArchiveKernel,
  RuntimeEventBus,
  type RuntimeContext
} from "@dark-sloth/runtime";

import type { AssistantSession } from "@dark-sloth/types";
import { KnowledgeGraphQueryEngine } from "@/lib/knowledge-graph/queryEngine";
import { PublishingLibraryEngine } from "@/lib/publishing/publishingLibraryEngine";
import { IntelligenceEngine } from "@/lib/intelligence/intelligenceEngine";
import fs from "node:fs";
import path from "node:path";

let kernel: ArchiveKernel | undefined;

export function getArchiveKernel(): ArchiveKernel {
  if (kernel) {
    return kernel;
  }

  const engines = new EngineRegistry();
  const capabilities = new CapabilityRegistry();
  const events = new RuntimeEventBus();

  const graphRoot = path.join(
    process.cwd(),
    "data/knowledge-graph"
  );

  const entitiesPath = path.join(
    graphRoot,
    "entities.json"
  );

  const relationshipsPath = path.join(
    graphRoot,
    "relationships.json"
  );

  const entities = fs.existsSync(entitiesPath)
    ? JSON.parse(fs.readFileSync(entitiesPath, "utf8"))
    : [];

  const relationships = fs.existsSync(relationshipsPath)
    ? JSON.parse(fs.readFileSync(relationshipsPath, "utf8"))
    : [];

  const knowledgeGraph = new KnowledgeGraphQueryEngine({
    entities,
    relationships
  });

  engines.register(knowledgeGraph);
  capabilities.registerEngine(knowledgeGraph);

  const publishingLibrary =
    new PublishingLibraryEngine();

  engines.register(publishingLibrary);
  capabilities.registerEngine(publishingLibrary);

  const intelligence = new IntelligenceEngine();

  engines.register(intelligence);
  capabilities.registerEngine(intelligence);

  const runtime = new ArchiveKernel(
    engines,
    capabilities,
    events
  );

  kernel = runtime;

  return kernel;
}

export function startArchiveRuntime(
  session: AssistantSession
): ArchiveKernel {
  const runtime = getArchiveKernel();

  const context: RuntimeContext = {
    session
  };

  runtime.start(context);

  return runtime;
}
