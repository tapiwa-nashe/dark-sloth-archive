import type { ExportProfile } from "../profile/ExportProfile.js";
export interface RenderContext {
    profile: ExportProfile;
    pageNumber: number;
}
