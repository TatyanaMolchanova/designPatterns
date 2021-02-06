// class SimpleMembership {
//     constructor(name) {
//         this.name = name;
//         this.cost = 50;
//     }
// }

// class StandardMembership {
//     constructor(name) {
//         this.name = name;
//         this.cost = 150;
//     }
// }

// class PremiumMembership {
//     constructor(name) {
//         this.name = name;
//         this.cost = 500;
//     }
// }

// class MemberFactory {
//     static list = {
//         simple: SimpleMembership,
//         standard: StandardMembership,
//         premium: PremiumMembership
//     }

//     create(name, type = 'simple') {
//         const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
//         const member = new Membership(name);
//         member.type = type;
//         member.define = function() {
//             console.log(`${this.name} (${this.type}): ${this.cost}`);
//         }
//         return member;
//     }
// }

// const factory = new MemberFactory();

// const members = [
//     factory.create('Tanya', 'simple'),
//     factory.create('Natasha', 'premium'),
//     factory.create('Ira', 'standard'),
//     factory.create('Ivan', 'premium'),
//     factory.create('Petr')
// ];

// // console.log('members', members);

// members.forEach(m => {
//     m.define();
// })

// 20:05 https://www.youtube.com/watch?v=YJVj4XNASDk&t=147s



// Factory - creational pattern in JS

class baseAccess {
    constructor(name) {
        this.name = name;
        this.price = 100;
    }
}

class standardAccess {
    constructor(name) {
        this.name = name;
        this.price = 200;
    }
}

class premiumAccess {
    constructor(name) {
        this.name = name;
        this.price = 300;
    }
}

class AccessFactory {
    static list = {
        base: baseAccess,
        standard: standardAccess,
        premium: premiumAccess
    }

    create(name, access = 'base') {
        const Accessment = AccessFactory.list[access] || AccessFactory.list[base];
        const member = new Accessment(name);
        member.access = access;
        member.define = function() {
            console.log(`${member.name} (${member.access}) - ${member.price}`)
        }
        return member;
    }
}

const factory = new AccessFactory();

const members = [
    factory.create('Tanya', 'base'),
    factory.create('Natasha', 'standard'),
    factory.create('Ira', 'premium'),
    factory.create('Ivan')
];

members.forEach(m => m.define())

