const profile = {
    name: 'Alex',
    age: 20,
    coords: {
        latitude: 0,
        longitude: 10
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const {age}: {age: number} = profile;
const {coords: {latitude, longitude}}: {coords: {latitude: number, longitude: number }} = profile;
