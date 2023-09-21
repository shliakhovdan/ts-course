abstract class FigureShape {
    protected constructor(public readonly name: string, public readonly color: string) {}

    abstract calculateArea(): number;
}

class Circle extends FigureShape {
    constructor(public readonly radius: number, color: string) {
        super('Circle', color);
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends FigureShape {
    constructor(public readonly width: number, public readonly height: number, color: string) {
        super('Rectangle', color);
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    print(): void {
        console.log('Rectangle area formula: Width * Height.')
    }
}

class Square extends Rectangle {
    constructor(public readonly sideLength: number, color: string) {
        super(sideLength, sideLength, color);
    }

    print(): void {
        console.log('Square area formula: Side length * Side length.')
    }
}

class Triangle extends FigureShape {
    constructor(public readonly base: number, public readonly height: number, color: string) {
        super('Triangle', color);
    }

    calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
}