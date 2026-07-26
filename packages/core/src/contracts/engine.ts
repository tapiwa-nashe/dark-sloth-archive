import type {
  EngineCapability
} from "./capability.js";


export interface EngineIdentity {

  id: string;

  name: string;

  version: string;

}


export interface EngineHealth {

  healthy: boolean;

  message?: string;

}


export interface Engine {

  identity: EngineIdentity;

  capabilities: EngineCapability[];

  health(): EngineHealth;

}
