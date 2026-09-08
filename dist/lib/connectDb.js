"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbInstace = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectionString = `mongodb://root:password@localhost:27017`;
exports.dbInstace = mongoose_1.default.connect(connectionString, { dbName: "Icesi" })
    .then(() => console.log("Connected to mongoDB")).catch((error) => console.log(error));
//# sourceMappingURL=connectDb.js.map