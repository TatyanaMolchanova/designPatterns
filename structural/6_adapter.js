// implement new functional in old without breaking
// class OldCalc {
//     operations(t1, t2, operation) {
//         switch(operation) {
//             case 'add': return t1 + t2;
//             case 'sub': return t1 - t2;
//             default: return NaN;
//         }
//     }
// }

// class NewCalc {
//     add(t1, t2) {
//         return t1 + t2;
//     }
//     sub(t1, t2) {
//         return t1 - t2;
//     }
// }

// class CalcAdapter {
//     constructor() {
//        this.calc = new NewCalc(); 
//     }
//     operations(t1, t2, operation) {
//         switch(operation) {
//             case 'add': return this.calc.add(t1, t2);
//             case 'sub': return this.calc.sub(t1, t2);
//             default: return NaN;
//         }
//     }
// }

// const oldCalc = new OldCalc();
// console.log(oldCalc.operations(10, 5, 'add'));

// const newCalc = new NewCalc();
// console.log(newCalc.add(10, 5));

// const adapter = new CalcAdapter();
// console.log(adapter.operations(25, 10, 'sub'));

// adapter implements new functional in old without breaking
class OldCalc {
    operations(num1, num2, operation) {
        switch(operation) {
            case 'mult': return num1 * num2;
            case 'div': return num1 / num2;
            default: return NaN;
        }
    }
}

class NewCalc {
    mult(num1, num2) {
        return num1 * num2;
    }
    div(num1, num2) {
        return num1 / num2;
    }
}

class Adapter {
    constructor() {
        this.calc = new NewCalc;
    }
    operations(num1, num2, operation) {
        switch(operation) {
            case 'mult': return this.calc.mult(num1, num2);
            case 'div': return this.calc.div(num1, num2);
            default: return NaN;
        }
    }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(1, 3, 'mult'));

const newCalc = new NewCalc();
console.log(newCalc.div(35, 5));

const adapter = new Adapter();
console.log(adapter.operations(4, 6, 'mult'));