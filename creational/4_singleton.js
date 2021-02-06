// can be 1 instance of class - database for example

// class Database {
//     constructor(data) {
//         if (Database.exists) {
//             return Database.instance;
//         }
//         Database.instance = this;
//         Database.exists = true;
//         this.data = data;
//     }

//     getData() {
//         return this.data;
//     }
// }

// const mongo = new Database('MongoDB');
// console.log(mongo.getData());

// const mysql = new Database('MySQL');
// console.log(mysql.getData());

// can be 1 instance of class - database for example

class Love {
    constructor(person) {
        if (Love.exists) {
            return Love.instance;
        }

        Love.instance = this;
        Love.exists = true;
        this.person = person;
    }

    getLove() {
        return this.person;
    }
}

const cat = new Love('cat');
console.log(cat.getLove());

const man = new Love('man');
console.log(man.getLove());

































