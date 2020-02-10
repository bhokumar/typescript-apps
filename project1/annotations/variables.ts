
function sum(): void {
    const apples: number = 5;
}

sum();

let colors: string[] = ['red', 'yello'];

class Car {

}

let car: Car = new Car();

// Object literal

let point: {x: number, y: number} = {
    x: 100,
    y: 200
}

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

const json = '{"x1": "hello", "y": 20}';

const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

let numbers = [-10, 20, 30];

let numberAboveZero: number | boolean = false;

for (let i=0; i< numbers.length; i++) {
    if (numbers[i]> 0) {
        numberAboveZero = numbers[i];
    }
}

