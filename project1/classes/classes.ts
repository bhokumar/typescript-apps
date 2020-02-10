class Vehicle {
    drive(): void {
        console.log('Chugga Chugga');
    }
}

const vehicle = new Vehicle();
vehicle.drive();

class Car extends Vehicle {
     drive(): void {
        console.log('Voom');
    }
}

const bmw = new Car();
bmw.drive()
