import type { ReactNode } from "react";
import type { NavigationGroup, NavigationItem } from "../types.js";
export interface NavigationRailProps {
    items?: readonly NavigationItem[];
    groups?: readonly NavigationGroup[];
    activeTargetId?: string;
    title?: string;
    onNavigate?: (item: NavigationItem) => void;
    renderIcon?: (item: NavigationItem) => ReactNode;
    className?: string;
}
export declare function NavigationRail({ groups, items, activeTargetId, title, onNavigate, renderIcon, className, }: NavigationRailProps): import("react").JSX.Element;
