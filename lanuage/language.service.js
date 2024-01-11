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
exports.langaugeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const language_madel_1 = require("./madel/language.madel");
const sequelize_2 = require("sequelize");
let langaugeService = class langaugeService {
    constructor(LanguageRepository) {
        this.LanguageRepository = LanguageRepository;
    }
    async AddLanguage(value) {
        return await this.LanguageRepository.create(value);
    }
    async GetAll() {
        return await this.LanguageRepository.findAll();
    }
    async GetById(id) {
        return await this.LanguageRepository.findOne({ where: { id: id } });
    }
    async SearchLanguage(query) {
        return await this.LanguageRepository.findAll({ where: { value: { [sequelize_2.Op.like]: `%${query}%` } } });
    }
    async Delete(id) {
        return await this.LanguageRepository.destroy({ where: { id: id } });
    }
};
exports.langaugeService = langaugeService;
exports.langaugeService = langaugeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(language_madel_1.LanguageTable)),
    __metadata("design:paramtypes", [Object])
], langaugeService);
//# sourceMappingURL=language.service.js.map