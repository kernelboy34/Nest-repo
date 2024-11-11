"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmtpService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
const config_1 = require("../../config/config");
let SmtpService = class SmtpService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: config_1.config.host,
            port: config_1.config.port,
            secure: config_1.config.secure,
            auth: {
                user: config_1.config.user,
                pass: config_1.config.pass,
            },
        });
    }
    async sendMail(to, subject, text) {
        const mailOptions = {
            from: 'vanpedrazas@gmail.com',
            to,
            subject,
            text,
        };
        return this.transporter.sendMail(mailOptions);
    }
};
exports.SmtpService = SmtpService;
exports.SmtpService = SmtpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SmtpService);
//# sourceMappingURL=smtp.service.js.map