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
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const history_madel_1 = require("./madel/history.madel");
const uuid_1 = require("uuid");
let HistoryService = class HistoryService {
    constructor(historyRepository) {
        this.historyRepository = historyRepository;
    }
    async create(history) {
        let newHistory = {
            id: (0, uuid_1.v4)(),
            userId: history.userId,
            bookId: history.bookId,
            bookbanner: history.bookbanner,
            bookpath: history.bookpath
        };
        try {
            return await this.historyRepository.create(newHistory);
        }
        catch (e) {
            console.log(e);
            return e.message;
        }
    }
    async GetAll() {
        return await this.historyRepository.findAll();
    }
    async GetOne(idx) {
        return await this.historyRepository.findOne({ where: { id: idx } });
    }
    async GetByUserId(idx) {
        return await this.historyRepository.findAll({ where: { userId: idx } });
    }
    async GetByBookId(idx) {
        return await this.historyRepository.findOne({ where: { bookId: idx } });
    }
    async DeleteOne(idx) {
        return await this.historyRepository.destroy({ where: { id: idx } });
    }
    async DeleteByUserId(idx) {
        return await this.historyRepository.destroy({ where: { userId: idx } });
    }
    async DeleteByBookId(idx) {
        await this.historyRepository.destroy({ where: { bookId: idx } });
    }
    async RefrshSame(bookID, userID) {
        await this.historyRepository.destroy({ where: { bookId: 'jjj', userId: userID } });
    }
};
exports.HistoryService = HistoryService;
exports.HistoryService = HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(history_madel_1.HistoryTable)),
    __metadata("design:paramtypes", [Object])
], HistoryService);
//# sourceMappingURL=history.service.js.map