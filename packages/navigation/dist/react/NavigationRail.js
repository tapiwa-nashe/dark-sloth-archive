import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function NavigationButton({ item, active, onNavigate, renderIcon, }) {
    return (_jsxs("button", { type: "button", className: `ds-navigation-item${active ? " is-active" : ""}`, "aria-label": item.label, onClick: () => onNavigate?.(item), children: [_jsx("span", { className: "ds-navigation-icon", children: renderIcon?.(item) ?? "•" }), _jsx("span", { className: "ds-navigation-label", children: item.label })] }));
}
function NavigationGroupView({ group, activeTargetId, onNavigate, renderIcon, }) {
    return (_jsxs("section", { className: "ds-navigation-group", children: [_jsx("div", { className: "ds-navigation-group-label", children: group.label }), group.items.map((item) => (_jsx(NavigationButton, { item: item, active: item.target.id === activeTargetId, onNavigate: onNavigate, renderIcon: renderIcon }, item.id)))] }));
}
export function NavigationRail({ groups = [], items = [], activeTargetId, title = "Navigation", onNavigate, renderIcon, className = "", }) {
    return (_jsxs("nav", { className: `ds-navigation-rail${className ? ` ${className}` : ""}`, "aria-label": title, children: [_jsxs("div", { className: "ds-navigation-trigger", children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] }), _jsxs("div", { className: "ds-navigation-content", children: [groups.map((group) => (_jsx(NavigationGroupView, { group: group, activeTargetId: activeTargetId, onNavigate: onNavigate, renderIcon: renderIcon }, group.id))), items.map((item) => (_jsx(NavigationButton, { item: item, active: item.target.id === activeTargetId, onNavigate: onNavigate, renderIcon: renderIcon }, item.id)))] })] }));
}
