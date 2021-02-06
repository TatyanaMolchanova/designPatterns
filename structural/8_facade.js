// create new simple public interface for simplifying interaction
// class Complaints {
//     constructor() {
//         this.complaints = [];
//     }
//     reply(complaint) {}
//     add(complaint) {
//         this.complaints.push(complaint);
//         return this.reply(complaint);
//     }
// }

// class ProductComplaints extends Complaints {
//     reply({id, customer, details}) {
//         return `Product: ${id}: ${customer} (${details})`;
//     }
// }

// class ServiceComplaints extends Complaints {
//     reply({id, customer, details}) {
//         return `Service: ${id}: ${customer} (${details})`;
//     }
// }

// class ComplaintRegistry {
//     register(customer, type, details) {
//         const id = Date.now();
//         let complaint;
//         if (type === 'service') {
//             complaint = new ServiceComplaints();
//         } else {
//             complaint = new ProductComplaints();
//         }
//         return complaint.add({id, customer, details});
//     }
// }

// const registry = new ComplaintRegistry();
// console.log(registry.register('Vladilen', 'service', 'unavalaible'));
// console.log(registry.register('Tanya', 'product', 'error'));

// create new simple public interface for simplifying interaction
class Complaints {
    constructor() {
        this.complaints = [];
    }
    reply(complaint) {}
    add(complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Product ${id} ${customer} (${details})`;
    }
}

class ServiceComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Service ${id} ${customer} (${details})`;
    }
}

class RegisterComplaint {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;
        if (type === 'service') {
            complaint = new ServiceComplaints();
        } else {
            complaint = new ProductComplaints();
        }
        return complaint.add({id, customer, details});
    }
}

const registry = new RegisterComplaint();
console.log(registry.register('Tanya', 'service', 'bad service'));
console.log(registry.register('Natasha', 'product', 'mistake'));

// 50:39 https://www.youtube.com/watch?v=YJVj4XNASDk&t=147s