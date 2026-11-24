import assert from "node:assert/strict";
import test from "node:test";
import { createGroupedNavigation, createNavigation, } from "./navigation.js";
test("creates navigation from semantic destinations", () => {
    const visited = [];
    const navigation = createNavigation({
        navigate(target) {
            visited.push(target.id);
        },
    }, [
        {
            id: "records",
            label: "Records",
            target: {
                id: "archive.records",
            },
        },
        {
            id: "books",
            label: "Books",
            target: {
                id: "archive.books",
            },
        },
    ]);
    navigation.navigateById("archive.records");
    assert.deepEqual(visited, ["archive.records"]);
    assert.equal(navigation.find("archive.books")?.label, "Books");
});
test("supports grouped navigation without owning presentation", () => {
    const visited = [];
    const navigation = createGroupedNavigation({
        navigate(target) {
            visited.push(target.id);
        },
    }, [
        {
            id: "explore",
            label: "Explore",
            items: [
                {
                    id: "collections",
                    label: "Collections",
                    target: {
                        id: "library.collections",
                    },
                },
            ],
        },
        {
            id: "personal",
            label: "Personal",
            items: [
                {
                    id: "bookmarks",
                    label: "Bookmarks",
                    target: {
                        id: "library.bookmarks",
                    },
                },
            ],
        },
    ]);
    assert.equal(navigation.groups.length, 2);
    assert.equal(navigation.items.length, 2);
    navigation.navigateById("library.bookmarks");
    assert.deepEqual(visited, ["library.bookmarks"]);
});
test("rejects unknown destinations", () => {
    const navigation = createNavigation({
        navigate() { },
    }, []);
    assert.throws(() => navigation.navigateById("missing"), /Navigation target not found/);
});
