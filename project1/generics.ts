export class ArrayOfNumber {
    constructor(public collection: number[]) { }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfString {
    constructor(public collection: string[]) { }

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfType<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

function printAnything<T>(arr: T[]): void {
    for(let i=0; i< arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything(['hello', 'hi', 'bye']);

interface Printable {
    print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
    for (let i=0; i< arr.length; i++) {
        arr[i].print();
    }
}