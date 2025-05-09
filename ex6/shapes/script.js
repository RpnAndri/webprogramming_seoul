class Shape {

    #color;

    constructor(color) {
        this.#color = color;
    }

    getColor() {
        return this.#color;
    }

    calculateArea() {
        return 0;
    }

    toString() {
        return `Description: ${this.#color}`
    }
}

class Circle extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI*this.radius*this.radius;
    }

    toString() {
        return `This circle has the color: ${this.getColor()} and radius: ${this.radius}`;
    }
}

class Square extends Shape {
    side;
    constructor(color, side) {
        super(color);
        this.side = side;
    }

    calculateArea() {
        return this.side*this.side;
    }

    toString() {
        return `This square has the color: ${this.getColor()} and side: ${this.side}`;
    }
}

const circle = new Circle("blue", 5);
const square = new Square("red", 4);

document.getElementById("output").innerHTML = `
    <h2>Circle Stats</h2>
    <p>Circle Description: ${circle.toString()}</p>
    <p>Circle Area: ${circle.calculateArea().toFixed(2)}</p>
    </br>
    <h2>Square Stats</h2>
    <p>Square Description: ${square.toString()}</p>
    <p>Square Area: ${square.calculateArea().toFixed(2)}</p>
`;
