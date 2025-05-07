class Car {
    #make;
    #model;
    #year;
    constructor(make, model, year) {
    this.#make = make;
    this.#model = model;
    this.#year = year;
    }
    getMake() {
    return this.#make;
    }
    getModel() {
    return this.#model;
    }
    start() {
    console.log(`${this.#make} ${this.#model} started.`);
    }
    getDetails() {
    return `${this.#make} ${this.#model}, Year: ${this.#year}`;
    }
    }
    class ElectricCar extends Car {
    #batteryCapacity;
    constructor(make, model, year, batteryCapacity) {
    super(make, model, year);
    this.#batteryCapacity = batteryCapacity;
    }
    start() {
    console.log(`${this.getMake()} ${this.getModel()} (Electric) started silently.`);
    }
    charge() {
    console.log(`${this.getDetails()} with battery ${this.#batteryCapacity} is charging.`);
    }
    }
    // Instantiate objects
    const toyota = new Car('Toyota', 'Camry', 2020);
    const tesla = new ElectricCar('Tesla', 'Model S', 2022, '100 kWh');
    // Add event listeners
    document.getElementById('showCarDetails').addEventListener('click', () => {
    document.getElementById('output').innerText = toyota.getDetails();
    });
    document.getElementById('showElectricCarDetails').addEventListener('click', () => {
    document.getElementById('output').innerText = tesla.getDetails();
    });