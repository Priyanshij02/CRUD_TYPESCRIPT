"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//details from the env
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const dbName = 'dbase2';
console.log(username, password, dbName, "PRINTING ALL DETAILS:");
//const connectionString = `mongodb+srv://:priyanshijain:jPZjaVoXnzH5Avrk@cluster0.n5djpap.mongodb.net/${dbName}?retryWrites=true&w=majority`
const connectionString = `mongodb+srv://priyanshijain:jPZjaVoXnzH5Avrk@cluster0.n5djpap.mongodb.net/`;
console.log(connectionString, ">>>>>");
// mongodb+srv://priyanshijain:<password>@cluster0.n5djpap.mongodb.net/
//mongodb+srv://cluster0.n5djpap.mongodb.net/
const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4 // Use IPv4, skip trying IPv6
};
//db connection
exports.db = mongoose_1.default.connect(connectionString, options)
    .then(res => {
    if (res) {
        console.log(`Database connection succeffully to ${dbName}`);
    }
}).catch(err => {
    console.log(">>>>>>err", err, "error in mongo");
});
//# sourceMappingURL=db.config.js.map