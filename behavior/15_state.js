// class Light {
//     constructor(light) {
//         this.light = light;
//     }
// }

// class RedLight extends Light {
//     constructor() {
//         super('red');
//     }

//     sign() {
//         return 'STOP'
//     }
// }

// class YellowLight extends Light {
//     constructor() {
//         super('yellow');
//     }

//     sign() {
//         return 'READY'
//     }
// }

// class GreenLight extends Light {
//     constructor() {
//         super('green');
//     }

//     sign() {
//         return 'GO!'
//     }
// }

// class TrafficLight {
//     constructor() {
//         this.states = [
//             new GreenLight(),
//             new RedLight(),
//             new YellowLight()
//         ];

//         this.current = this.states[0];
//     }

//     change() {
//         const total = this.states.length;
//         let index = this.states.findIndex(light => light === this.current);

//         if (index + 1 < total) {
//             this.current = this.states[index + 1];
//         } else {
//             this.current = this.states[0];
//         }

//     }

//     sign() {
//         return this.current.sign();
//     }
// }

// const traffic = new TrafficLight();
// console.log(traffic.sign());

// traffic.change();
// console.log(traffic.sign());

// traffic.change();
// console.log(traffic.sign());

// traffic.change();
// console.log(traffic.sign());

// traffic.change();
// console.log(traffic.sign());

// traffic.change();
// console.log(traffic.sign());

// traffic.change();
// console.log(traffic.sign());
// change states from 1 class
class Light {
    constructor(light) {
        this.light = light;
    }
}

class RedLight  extends Light {
    constructor() {
        super('red');
    }

    sign() {
        return 'STOP';
    }
}

class YellowLight extends Light {
    constructor() {
        super('yellow');
    }

    sign() {
        return 'READY';
    }
}

class GreenLight extends Light {
    constructor() {
        super('green');
    }

    sign() {
        return 'GO!';
    }
}

class TrafficLight {
    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ];
        this.current = this.states[0];
    }

    change() {
        const total = this.states.length;
        const index = this.states.findIndex(state => state === this.current);

        if (index + 1 < total) {
            this.current = this.states[index + 1];
        } else {
            this.current = this.states[0];
        }
    }

    sign() {
        return this.current.sign();
    }
}

const traffic = new TrafficLight();
console.log(traffic.sign());

traffic.change();
console.log(traffic.sign());

traffic.change();
console.log(traffic.sign());

traffic.change();
console.log(traffic.sign());

traffic.change();
console.log(traffic.sign());

traffic.change();
console.log(traffic.sign());


































