export class ExportManager {
    exporters;
    constructor(exporters) {
        this.exporters = exporters;
    }
    async export(publication) {
        const outputs = [];
        for (const exporter of this.exporters) {
            outputs.push(String(await exporter.export(publication)));
        }
        return outputs;
    }
}
//# sourceMappingURL=ExportManager.js.map