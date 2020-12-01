"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server/server");
const users_router_1 = require("../users/users.router");
const server = new server_1.Server();
// inicia a aplicacao
server.bootstrap([users_router_1.usersRouter]).then(server => {
    console.log(`Server is running on: `, server.application.address());
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    // indica uma saida anormal
    process.exit(1);
});
//# sourceMappingURL=main.js.map