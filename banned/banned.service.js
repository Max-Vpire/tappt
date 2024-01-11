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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannedService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const banned_madel_1 = require("./madel/banned.madel");
const uuid_1 = require("uuid");
let BannedService = class BannedService {
    constructor(bannedsRepository) {
        this.bannedsRepository = bannedsRepository;
    }
    async GetAllBanned() {
        let banneds = await this.bannedsRepository.findAll();
        return banneds;
    }
    async BannUsers(userId, describtion) {
        let Banned = {
            id: (0, uuid_1.v4)(),
            userId: userId,
            describtion: describtion
        };
        return await this.bannedsRepository.create(Banned);
    }
    async GetOne(id) {
        return await this.bannedsRepository.findOne({ where: { id: id } });
    }
    async GetByUserId(userId) {
        return await this.bannedsRepository.findOne({ where: { userId: userId } });
    }
    async DeleteBann(id) {
        return await this.bannedsRepository.destroy({ where: { id: id } });
    }
    async DeleteByUserId(userId) {
        return await this.bannedsRepository.destroy({ where: { userId: userId } });
    }
    async UpdateDescribtion(idx, describtion) {
        return await this.bannedsRepository.update({ describtion: describtion }, {
            where: { id: idx }
        });
    }
    async isPossible(id) {
        return await this.bannedsRepository.findOne({ where: { userId: id } });
    }
};
exports.BannedService = BannedService;
exports.BannedService = BannedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(banned_madel_1.BannedsTable)),
    __metadata("design:paramtypes", [Object])
], BannedService);
//# sourceMappingURL=banned.service.js.map