type NumberOperation = (x: number, y: number) => number;

interface ICalculator {
    add: NumberOperation;
    subtract: NumberOperation;
    multiply: NumberOperation;
    divide: NumberOperation;
}

function calculate(calculator: ICalculator, action: string, x: number, y: number): number {
    switch (action) {
        case 'add':
            return calculator.add(x, y);
        case 'subtract':
            return calculator.subtract(x, y);
        case 'multiply':
            return calculator.multiply(x, y);
        case 'divide':
            return calculator.divide(x, y);
        default:
            throw new Error('Unsupported operation!');
    }
}


