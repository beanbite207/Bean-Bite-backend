"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../logger"));
const connectDB = async () => {
    try {
        const connect = await mongoose_1.default.connect("mongodb://localhost:27017/beanbite");
        logger_1.default.info(`conncted ${connect.connection.host}`);
    }
    catch (error) {
        logger_1.default.error("monogo db connecting error", error);
        return;
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map