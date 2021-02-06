// effective pass different data through objects (pass images to prevent repeated loading of the same objects)
// class Car {
//     constructor(model, price) {
//         this.model = model;
//         this.price = price;
//     }
// }

// class CarFactory {
//     constructor() {
//         this.cars = []
//     }

//     create(model, price) {
//         const candidate = this.getCar(model);
//         if (candidate) {
//             return candidate;
//         }

//         const newCar = new Car(model, price);
//         this.cars.push(newCar);
//         return newCar;
//     }

//     getCar(model) {
//         return this.cars.find(car => car.model === model);
//     }
// }

// const factory = new CarFactory();

// const bmwX6 = factory.create('bmw', 10000);
// const audi = factory.create('audi', 12000);
// const bmWX3 = factory.create('bmw', 8000);
// // console.log(bmwX6);
// // console.log(audi);
// // console.log(bmWX3);
// console.log(bmWX3 === bmwX6);

// effective pass different data through objects (pass images to prevent repeated loading of the same objects)
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    create(model, price) {
        const candidate = this.getCar(model);
        if (candidate) {
            return candidate;
        }

        const newCar = new Car(model, price);
        this.cars.push(newCar);
        return newCar;
    }

    getCar(model) {
        return this.cars.find(car => car.model === model);
    }
}

const factory = new CarFactory();

const slavuta = factory.create('slavuta', 4000);
const lexus = factory.create('lexus', 50000);
const lexusX5 = factory.create('lexus', 45000);
console.log(slavuta);
console.log(lexus);
console.log(lexusX5);
console.log(lexusX5 === lexus);