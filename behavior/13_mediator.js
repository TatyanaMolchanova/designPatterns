// build communication between different objects
// class User {
//     constructor(name) {
//         this.name = name;
//         this.room = null;
//     }

//     send(message, to) {
//         this.room.send(message, this, to);
//     }

//     receive(message, from) {
//         console.log(`${from.name} => ${this.name}: ${message}`);
//     }
// }

// class ChatRoom {
//     constructor() {
//         this.users = {};
//     }

//     register(user) {
//         this.users[user.name] = user;
//         user.room = this;
//     }

//     send(message, from, to) {
//         if (to) {
//             to.receive(message, from);
//         } else {
//             Object.keys(this.users).forEach(key => {
//                 if (this.users[key] != from) {
//                     this.users[key].receive(message, from);
//                 }
//             })
//         }
//     }
// }

// const tanya = new User('Tanya');
// const natasha = new User('Natasha');
// const ira = new User('Ira');

// const room = new ChatRoom();

// room.register(tanya);
// room.register(natasha);
// room.register(ira);

// tanya.send('Hello!', natasha);
// natasha.send('Hello! Hello!', tanya);
// ira.send('Hi everybody!');
// build communication between different objects
class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name} - ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from);
        } else {
            Object.keys(this.users).forEach(user => {
                if (this.users[user] != from) {
                    this.users[user].receive(message, from);
                }
            })
        }
    }
}

const tanya = new User('Tanya');
const ira = new User('Ira');
const natasha = new User('Natasha');

const room = new ChatRoom();

room.register(tanya);
room.register(ira);
room.register(natasha);

room.send('Hello', tanya, natasha);
room.send('Hello! Hello!', natasha, tanya);
room.send('Hi everybody', ira);

tanya.send('Have a good day!', ira);
natasha.send('Cool!');


































