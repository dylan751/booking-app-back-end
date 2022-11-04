"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_js_1 = __importDefault(require("./routes/auth.js"));
const users_js_1 = __importDefault(require("./routes/users.js"));
const hotels_js_1 = __importDefault(require("./routes/hotels.js"));
const rooms_js_1 = __importDefault(require("./routes/rooms.js"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.MONGO);
        console.log('Connected to MongoDB!');
    }
    catch (error) {
        throw error;
    }
});
mongoose_1.default.connection.on('disconnected', () => {
    console.log('MongoDB disconnected!');
});
// Middlewares
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use('/api/auth', auth_js_1.default);
app.use('/api/users', users_js_1.default);
app.use('/api/hotels', hotels_js_1.default);
app.use('/api/rooms', rooms_js_1.default);
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong!';
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});
app.listen(4000, () => {
    connect();
    console.log('Connected to backend.');
});
