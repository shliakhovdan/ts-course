interface FirstInterface {
    [key: string]: number | string;
}

interface SecondInterface {
    [key: string]: (...args: any[]) => any;
}

interface ThirdInterface {
    [index: number]: string;
}

interface IUser {
    name: string;
    [key: string]: string;
}

interface FourthInterface {
    [key: string]: number;
}

interface ExtendedInterface extends FourthInterface {
    birthdayDate: number;
}

function checkValuesOnNumber(object: FirstInterface): boolean {
    return Object.values(object).every(item => typeof item === 'number');
}