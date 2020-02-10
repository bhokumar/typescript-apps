interface Vehicle1 {
    name: string,
    year: number,
    broken: boolean
}

const oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true
};

const printVehicle = (vehicle: Vehicle1) => {
    const {broken, year, name} = vehicle;
    console.log(`
        Name: ${broken}
        Year: ${year}
        Broken: ${broken}
    `);
}

printVehicle(oldCivic);