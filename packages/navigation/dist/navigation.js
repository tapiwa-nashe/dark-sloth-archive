export function createNavigation(adapter, items) {
    const frozenItems = Object.freeze([...items]);
    return {
        groups: Object.freeze([]),
        items: frozenItems,
        navigate(target) {
            adapter.navigate(target);
        },
        navigateById(targetId) {
            const item = frozenItems.find((candidate) => candidate.target.id === targetId);
            if (!item) {
                throw new Error(`Navigation target not found: ${targetId}`);
            }
            adapter.navigate(item.target);
        },
        find(targetId) {
            return frozenItems.find((candidate) => candidate.target.id === targetId);
        },
    };
}
export function createGroupedNavigation(adapter, groups) {
    const frozenGroups = Object.freeze(groups.map((group) => Object.freeze({
        ...group,
        items: Object.freeze([...group.items]),
    })));
    const items = Object.freeze(frozenGroups.flatMap((group) => group.items));
    return {
        groups: frozenGroups,
        items,
        navigate(target) {
            adapter.navigate(target);
        },
        navigateById(targetId) {
            const item = items.find((candidate) => candidate.target.id === targetId);
            if (!item) {
                throw new Error(`Navigation target not found: ${targetId}`);
            }
            adapter.navigate(item.target);
        },
        find(targetId) {
            return items.find((candidate) => candidate.target.id === targetId);
        },
    };
}
