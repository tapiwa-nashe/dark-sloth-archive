export interface ExportProfile {
    name: string;
    page: {
        width: number;
        height: number;
        marginTop: number;
        marginBottom: number;
        marginLeft: number;
        marginRight: number;
    };
    typography: {
        bodyFont: string;
        headingFont: string;
        bodySize: number;
        headingSize: number;
        lineHeight: number;
    };
    outputs: string[];
    theme: {
        title: {
            size: number;
            bold: boolean;
        };
        heading1: {
            size: number;
            bold: boolean;
        };
        heading2: {
            size: number;
            bold: boolean;
        };
        body: {
            size: number;
            bold: boolean;
        };
    };
}
