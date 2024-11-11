"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.config = {
    host: process.env.MAILER_HOST,
    port: Number(process.env.MAILER_PORT),
    secure: process.env.MAILER_SECURE === 'true',
    user: process.env.MAILER_ADDRESS_FROM,
    pass: process.env.MAILER_PASSWORD,
    salt: Number(process.env.SALT),
    token: String(process.env.SECRET_TOKEN),
};
//# sourceMappingURL=config.js.map