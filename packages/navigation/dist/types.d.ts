export interface NavigationTarget {
    id: string;
}
export interface NavigationItem {
    id: string;
    label: string;
    target: NavigationTarget;
}
export interface NavigationGroup {
    id: string;
    label: string;
    items: readonly NavigationItem[];
}
export interface NavigationAdapter {
    navigate(target: NavigationTarget): void;
}
