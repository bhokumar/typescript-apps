import fs from 'fs';
import { OutpuTarget } from "../Summary";

export class HtmlReport implements OutpuTarget {
    print(report: string): void {
        const html = `
            <div>
                <h1>Analysis output</h>
                <div>${report}</div>
            </div>
        `;
        fs.writeFileSync('report.html', html);
    }
}