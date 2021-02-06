// add new behavior or functional for existed classes
// class Server {
//     constructor(ip, port) {
//         this.ip = ip;
//         this.port = port;
//     }

//     get url() {
//         return `https://${this.ip}:${this.port}`;
//     }
// }

// function aws(server) {
//     server.isAWS = true;
//     server.awsInfo = function() {
//         return server.url;
//     }
//     return server;
// }

// function azure(server) {
//     server.isAzure = true;
//     server.port += 500;
//     return server;
// }

// const s1 = aws(new Server('12.34.56.78', 8080));
// console.log(s1.isAWS);
// console.log(s1.awsInfo());

// const s2 = azure(new Server('98.87.76/12', 10001));
// console.log(s2.isAzure);
// console.log(s2.url);

// add new behavior or functional for existed classes
class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}

function aws(server) {
    server.isAWS = true;
    server.getUrl = function() {
        return server.url;
    }
    return server;
}

function azure(server) {
    server.isAzure = true;
    server.port += 1000;
    return server;
}

const s1 = aws(new Server('12.34.56.78', 8080));
console.log(s1.isAWS);
console.log(s1.getUrl());

const s2 = azure(new Server('55.55.55.55', 300));
console.log(s2.isAzure);
console.log(s2.url);

//41:25 https://www.youtube.com/watch?v=YJVj4XNASDk&t=147s