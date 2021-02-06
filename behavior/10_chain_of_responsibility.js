//consequense call of operations and changing 
// class MySum {
//     constructor(initialValue = 42) {
//         this.sum = initialValue;
//     }

//     add(value) {
//         this.sum += value;
//         return this; // return link to current object - context
//     }
// }

// const sum1 = new MySum();
// console.log(sum1.add(8).add(10).add(33).add(6));

// const sum2 = new MySum(0);
// console.log(sum2.add(1).add(10).add(4).add(6));



//consequense call of operations and changing 

class MyCalc {
    constructor(initialValue = 50) {
        this.res = initialValue;
    }

    add(value) {
        this.res += value;
        return this; // link to current object - context
    }

    substract(value) {
        this.res -= value;
        return this;
    }
}

const operations = new MyCalc();
console.log(operations.add(5).add(10).add(4));
console.log(operations.add(5).substract(30).add(1).substract(4));

const operations1 = new MyCalc(0);
console.log(operations1.substract(15).add(25));

