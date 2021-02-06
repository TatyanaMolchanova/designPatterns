// create objects of new type
// before Classes appearance
// function Server(name, ip) {
//     this.name = name;
//     this.ip = ip;
// }

// Server.prototype.getUrl = function() {
//     return `https://${this.ip}:80`;
// }

// const aws = new Server('AWS German', '82.21.21.32');
// console.log(aws.getUrl());

// modern approach

// class Server {
//     constructor(name, ip) {
//         this.name = name;
//         this.ip = ip;
//     }
//     getUrl = function() {
//         return `https://${this.ip}:80`;
//     }
// }


// const aws = new Server('AWS German', '82.21.21.32');
// console.log(aws.getUrl());


// Constructor - creational pattern
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    getInfo() {
        return `I, ${this.name}, live in ${this.address}`;
    }
}

const person = new Person('Tanya', 'Mariupol, Ukraine');
console.log(person.getInfo());