import type {
  Observation
} from "./observation.js";


export interface Context {

  observations: Observation[];

  createdAt: Date;

}
