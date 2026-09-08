"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const student_route_1 = require("./routes/student.route");
const connectDb_1 = require("./lib/connectDb");
class App {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.middleware();
        this.settings();
        this.router();
    }
    middleware() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
    }
    settings() {
        this.app.set("port", 8081);
    }
    router() {
        this.app.use("/students", student_route_1.studentRouter);
    }
    listen() {
        connectDb_1.dbInstace.then(() => {
            this.app.listen(this.app.get("port"));
            console.log(`Server running in port ${this.app.get("port")}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map