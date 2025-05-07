class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`${this.make} ${this.model} started.`);
    }
}

// Creating instances of Car
const car1 = new Car('Toyota', 'Camry', 2020);
const car2 = new Car('Honda', 'Accord', 2021);
car1.start(); // Should log "Toyota Camry started."
car2.start(); // Should log "Honda Accord started."

class ElectricCar extends Car {
    constructor(make, model, year, batteryCapacity) {
        super(make, model, year); // Call the parent class constructor
        this.batteryCapacity = batteryCapacity;
    }
    charge() {
        console.log(`${this.make} ${this.model} is charging.`);
    }
}
    const tesla = new ElectricCar('Tesla', 'Model S', 2022, '100 kWh');
    tesla.start(); // Should log "Tesla Model S started."
    tesla.charge(); // Should log "Tesla Model S is charging."