"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.verifyAccessToken = exports.generateRefreshToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const messages_1 = require("../constants/messages");
/* ---------------- ACCESS TOKEN ---------------- */
const generateToken = (id, isAdmin) => {
    if (!process.env.JWT_SECRET) {
        throw new Error(messages_1.Messages.JWT_NOT_DEFINED);
    }
    return jsonwebtoken_1.default.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: "6h" });
};
exports.generateToken = generateToken;
/* ---------------- REFRESH TOKEN ---------------- */
const generateRefreshToken = (id, isAdmin) => {
    if (!process.env.REFRESH_JWT_SECRET) {
        throw new Error(messages_1.Messages.REFRESH_JWT_SECRET_NOT_DEFINED);
    }
    return jsonwebtoken_1.default.sign({ id, isAdmin }, process.env.REFRESH_JWT_SECRET, { expiresIn: "7d" });
};
exports.generateRefreshToken = generateRefreshToken;
/* ---------------- VERIFY ---------------- */
const verifyAccessToken = (token) => {
    return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
};
exports.verifyAccessToken = verifyAccessToken;
const verifyRefreshToken = (token) => {
    return jsonwebtoken_1.default.verify(token, process.env.REFRESH_JWT_SECRET);
};
exports.verifyRefreshToken = verifyRefreshToken;
//# sourceMappingURL=jwt.js.map