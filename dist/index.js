"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const logger_1 = __importDefault(require("./logger"));
const db_1 = __importDefault(require("./config/db"));
// import customerRouter from "./routes/customerRouter";
const adminRouter_1 = __importDefault(require("./routes/adminRouter"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
// app.use('/api/customer',customerRouter)
app.use('/api/admin', adminRouter_1.default);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    logger_1.default.info(`Server started on port ${PORT}`);
});
//# sourceMappingURL=index.js.map