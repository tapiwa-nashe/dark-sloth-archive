import type { ExportProfile } from "../profile/ExportProfile.js";
export interface Theme {
    readonly name: string;
    createProfile(): ExportProfile;
}
