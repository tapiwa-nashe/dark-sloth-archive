export class LayoutRenderer {
    render(layout, writer) {
        for (const block of layout.blocks) {
            switch (block.type) {
                case "heading":
                    writer.heading(block.text, block.level);
                    break;
                case "paragraph":
                    writer.paragraph(block.text);
                    break;
                case "quote":
                    writer.quote(block.text, block.attribution);
                    break;
                case "toc":
                    writer.tableOfContents(block.title, block.entries);
                    break;
                case "pageBreak":
                    writer.pageBreak();
                    break;
            }
        }
    }
}
//# sourceMappingURL=LayoutRenderer.js.map