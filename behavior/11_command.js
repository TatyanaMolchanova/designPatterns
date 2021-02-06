//create abstract wrap and then can manage through it
// class MyMath {
//     constructor(initialValue = 0) {
//         this.num = initialValue;
//     }

//     square() {
//         return this.num ** 2;
//     }

//     cube() {
//         return this.num ** 3;
//     }
// }

// class Command {
//     constructor(subject) {
//         this.subject = subject;
//         this.commandsExecuted = [];
//     }

//     execute(command) {
//         this.commandsExecuted.push(command);
//         return this.subject[command]();
//     }
// }

// const x = new Command(new MyMath(2));
// console.log(x.execute('square'));
// console.log(x.execute('cube'));
// console.log(x.execute('square'));

// console.log(x.commandsExecuted)
//create abstract wrap and then can manage through it
class MyMath {
    constructor(initialValue = 0) {
        this.num = initialValue;
    }

    square() {
        return this.num ** 2;
    }

    cube() {
        return this.num ** 3;
    }
}

class Command {
    constructor(subject) {
        this.subject = subject;
        this.executedCommands = [];
    }

    execute(command) {
        this.executedCommands.push(command);
        return this.subject[command]();
    }
}

const numbers = new Command(new MyMath(2));

console.log(numbers.execute('square'));
console.log(numbers.execute('cube'));
console.log(numbers.execute('square'));

console.log(numbers.executedCommands);