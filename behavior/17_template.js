// make templates and make delegation creation of functionality
// to child classes
// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }

//     responsibilities() {};

//     work() {
//         return `${this.name} executes ${this.responsibilities()}`;
//     }

//     getPaid() {
//         return `${this.name} get salary ${this.salary}`;
//     }
// }

// class Developer extends Employee {
//     constructor(name, salary) {
//         super(name, salary);
//     }

//     responsibilities() {
//         return 'write code';
//     }
// }

// class Tester extends Employee {
//     constructor(name, salary) {
//         super(name, salary);
//     }

//     responsibilities() {
//         return 'testing';
//     }
// }

// const dev = new Developer('Tanya', 100000);
// console.log(dev.getPaid());
// console.log(dev.work());

// const tester = new Tester('Viktorya', 90000)
// console.log(tester.getPaid());
// console.log(tester.work());

// make templates and make delegation creation of functionality
// to child classes
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {};

    work() {
        return `${this.name} executes ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} get salary ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'write code';
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'testing';
    }
}

const dev = new Developer('Tanya', 100000);
console.log(dev.work());
console.log(dev.getPaid());

const tester = new Tester('Natasha', 100000);
console.log(tester.work());
console.log(tester.getPaid());
































