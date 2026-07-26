export class MarkdownRenderer {
    async render(tree) {
        return tree.nodes
            .map(node => {
            switch (node.type) {
                case "part":
                    return `## ${node.content}`;
                case "heading":
                    return `# ${node.content}`;
                case "text":
                    return node.content ?? "";
                default:
                    return "";
            }
        })
            .filter(Boolean)
            .join("\n\n");
    }
}
//# sourceMappingURL=MarkdownRenderer.js.map