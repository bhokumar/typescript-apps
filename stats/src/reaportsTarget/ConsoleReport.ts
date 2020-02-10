import { OutpuTarget } from "../Summary";

export class ConsoleReport implements OutpuTarget {
    print(report: string): void {
        console.log(report);
    }
}