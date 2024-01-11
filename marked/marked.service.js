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
exports.MarkedService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const marked_madel_1 = require("./madel/marked.madel");
const uuid_1 = require("uuid");
let MarkedService = class MarkedService {
    constructor(markedRepository) {
        this.markedRepository = markedRepository;
    }
    async create(data) {
        let newData = {
            id: (0, uuid_1.v4)(),
            userId: data.userId,
            BookId: data.BookId
        };
        return await this.markedRepository.create(newData);
    }
    async GetAll() {
        return await this.markedRepository.findAll();
    }
    async GetOne(idx) {
        return await this.markedRepository.findOne({ where: { id: idx } });
    }
    async GetByUserId(idx) {
        return await this.markedRepository.findOne({ where: { userId: idx } });
    }
    async GetByBookId(idx) {
        return await this.markedRepository.findOne({ where: { BookId: idx } });
    }
    async DeleteOne(idx) {
        return await this.markedRepository.destroy({ where: { id: idx } });
    }
    async DeleteByUserId(idx) {
        return await this.markedRepository.destroy({ where: { userId: idx } });
    }
    async DeleteByBookId(idx) {
        return await this.markedRepository.destroy({ where: { BookId: idx } });
    }
};
exports.MarkedService = MarkedService;
exports.MarkedService = MarkedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(marked_madel_1.MarkedTable)),
    __metadata("design:paramtypes", [Object])
], MarkedService);
//# sourceMappingURL=marked.service.js.map