"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const users = [
    { id: '1', name: "Peter", email: 'peter@marvel.com' },
    { id: '2', name: "Bruce", email: 'bruce@dc.com' }
];
class User {
    static findAll() {
        return Promise.resolve(users);
    }
    static findById(id) {
        return new Promise(resolve => {
            const filtered = users.filter(user => user.id === id);
            let user = undefined;
            if (filtered.length > 0) {
                user = filtered[0];
            }
            resolve(user);
        });
    }
}
exports.User = User;
//# sourceMappingURL=users.model.js.map