const add =  (a: number, b: number): number => {
    return  a + b;
}

const devide = (a: number, b: number) => {

    return a / b;
}

const logWeather = ({wind, temprature}: {wind: {speed: number, direction: string}, temprature: number}): void => {
    console.log(wind);
    console.log(temprature);
}