import type { NavigationAdapter, NavigationGroup, NavigationItem, NavigationTarget } from "./types.js";
export interface NavigationModel {
    readonly groups: readonly NavigationGroup[];
    readonly items: readonly NavigationItem[];
    navigate(target: NavigationTarget): void;
    navigateById(targetId: string): void;
    find(targetId: string): NavigationItem | undefined;
}
export declare function createNavigation(adapter: NavigationAdapter, items: readonly NavigationItem[]): NavigationModel;
export declare function createGroupedNavigation(adapter: NavigationAdapter, groups: readonly NavigationGroup[]): NavigationModel;
