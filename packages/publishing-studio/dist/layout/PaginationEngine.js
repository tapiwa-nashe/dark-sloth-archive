export class PaginationEngine {
    maxBlocksPerPage = 12;
    paginate(document) {
        const pages = [];
        let current = [];
        let pageNumber = 1;
        const pushPage = () => {
            if (current.length === 0) {
                return;
            }
            pages.push({
                number: pageNumber,
                blocks: current
            });
            pageNumber++;
            current = [];
        };
        const addBlock = (block) => {
            current.push(block);
            if (current.length >= this.maxBlocksPerPage) {
                pushPage();
            }
        };
        for (const block of document.blocks) {
            if (block.type === "pageBreak") {
                pushPage();
                continue;
            }
            if (block.type === "heading") {
                const isChapterHeading = block.level === 1;
                if (isChapterHeading &&
                    current.length > 0) {
                    pushPage();
                }
                addBlock(block);
                continue;
            }
            addBlock(block);
        }
        pushPage();
        return pages;
    }
}
//# sourceMappingURL=PaginationEngine.js.map