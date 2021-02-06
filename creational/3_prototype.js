// const car = {
//     wheels: 4,

//     init() {
//         console.log(`I have ${this.wheels}, my owner is ${this.owner}`);
//     }
// }

// const carWithOwner = Object.create(car, { 
//     owner: {
//         value: 'Someone'
//     }
// });

// console.log('is Prototype car', carWithOwner.__proto__ === car);

// carWithOwner.init();

const flat = {
    rooms: 3,

    init() {
        console.log(`There are ${this.rooms} rooms in flat on ${this.street} street`);
    }
}

const flatOnStreet = Object.create(flat, {
    street: {
        value: 'Rainbow'
    }
})

flatOnStreet.init();

console.log('Is prototype flat:', flatOnStreet.__proto__ === flat);































