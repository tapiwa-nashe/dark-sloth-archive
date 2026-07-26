export class RendererRegistry {
    renderers;
    constructor(renderers) {
        this.renderers = renderers;
    }
    rendererFor(block) {
        const renderer = this.renderers.find(r => r.supports(block));
        if (!renderer) {
            throw new Error(`No renderer registered for "${block.type}".`);
        }
        return renderer;
    }
}
//# sourceMappingURL=RendererRegistry.js.map