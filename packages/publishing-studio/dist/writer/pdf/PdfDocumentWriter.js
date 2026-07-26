import { StandardFonts } from "pdf-lib";
export class PdfDocumentWriter {
    pdf;
    profile;
    page;
    font;
    y;
    headerLeft = "";
    headerRight = "";
    constructor(pdf, profile) {
        this.pdf = pdf;
        this.profile = profile;
    }
    async begin() {
        this.font =
            await this.pdf.embedFont(StandardFonts.TimesRoman);
        this.newPage();
    }
    async end() { }
    newPage() {
        this.page =
            this.pdf.addPage([
                this.profile.page.width,
                this.profile.page.height
            ]);
        this.y =
            this.profile.page.height -
                this.profile.page.marginTop;
        if (this.headerLeft ||
            this.headerRight) {
            this.page.drawText(this.headerLeft, {
                x: this.profile.page.marginLeft,
                y: this.profile.page.height - 24,
                size: 10,
                font: this.font
            });
            this.page.drawText(this.headerRight, {
                x: this.profile.page.width -
                    this.profile.page.marginRight -
                    this.font.widthOfTextAtSize(this.headerRight, 10),
                y: this.profile.page.height - 24,
                size: 10,
                font: this.font
            });
        }
    }
    paragraph(text, size = this.profile.theme.body.size) {
        if (this.y <
            this.profile.page.marginBottom) {
            this.newPage();
        }
        this.page.drawText(text, {
            x: this.profile.page.marginLeft,
            y: this.y,
            size,
            font: this.font
        });
        this.y -=
            this.profile.typography.lineHeight;
    }
    heading(text, level) {
        const style = level === 1
            ? this.profile.theme.heading1
            : this.profile.theme.heading2;
        this.paragraph(text, style.size);
    }
    tableOfContents(title, entries) {
        this.heading(title, 1);
        for (const entry of entries) {
            const indent = "  ".repeat(Math.max(0, entry.level - 1));
            this.paragraph(indent + entry.title);
        }
    }
    quote(text, attribution) {
        this.paragraph('"' + text + '"');
        if (attribution) {
            this.paragraph("— " + attribution, this.profile.theme.body.size - 1);
        }
    }
    pageBreak() {
        this.newPage();
    }
}
//# sourceMappingURL=PdfDocumentWriter.js.map