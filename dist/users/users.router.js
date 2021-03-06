"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const router_1 = require("../common/router");
const users_model_1 = require("./users.model");
class UsersRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/users', (req, res, next) => {
            users_model_1.User.findAll().then(users => {
                res.json(users);
                return next();
            });
        });
        application.get('/users/:id', (req, res, next) => {
            users_model_1.User.findById(req.params.id).then(user => {
                if (user) {
                    res.json(user);
                    return next();
                }
                res.send(404);
                return next();
            });
        });
    }
}
exports.usersRouter = new UsersRouter();
//# sourceMappingURL=users.router.js.map