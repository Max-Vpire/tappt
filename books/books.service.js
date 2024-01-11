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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const books_madel_1 = require("./madel/books.madel");
const file_service_1 = require("../file/file.service");
const uuid_1 = require("uuid");
const sequelize_2 = require("sequelize");
let BooksService = class BooksService {
    constructor(booksReporitory, fileService) {
        this.booksReporitory = booksReporitory;
        this.fileService = fileService;
    }
    async create(Books, banner, book) {
        let idx = (0, uuid_1.v4)();
        let canCreate = await this.booksReporitory.findOne({ where: { name: Books.name } });
        if (!canCreate) {
            const booksPath = this.fileService.CreateFile(file_service_1.FileType.BOOK, book);
            const bannerPath = this.fileService.CreateFile(file_service_1.FileType.BANNER, banner);
            return await this.booksReporitory.create({
                ...Books,
                id: idx,
                banner: bannerPath,
                path: booksPath
            });
        }
        return new common_1.HttpException('Conflict', common_1.HttpStatus.CONFLICT);
    }
    async GetAll() {
        return await this.booksReporitory.findAll();
    }
    async GetOne(idx) {
        return this.booksReporitory.findOne({ where: { id: idx } });
    }
    async SearchByName(name) {
        return await this.booksReporitory.findAll({ where: { name: { [sequelize_2.Op.like]: `%${name}%` } } });
    }
    async SearchByAuthor(author) {
        return await this.booksReporitory.findAll({ where: { author: { [sequelize_2.Op.like]: `%${author}%` } } });
    }
    async RandomSelect() {
        return await this.booksReporitory.sequelize.query('select * from books order by random() limit 12;');
    }
    async EditBook(id, book) {
        let Book = {
            name: book.name,
            author: book.author,
            describtion: book.describtion,
            language: book.language,
            type: book.type
        };
        return await this.booksReporitory.update({ ...Book }, { where: { id: id } });
    }
    async DeleteBook(id) {
        return await this.booksReporitory.destroy({ where: { id: id } });
    }
    async SelectByType(type) {
        return await this.booksReporitory.findAll({ where: { type: type } });
    }
    async SelectByLanguage(language) {
        return await this.booksReporitory.findAll({ where: { language: language } });
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(books_madel_1.BooksTable)),
    __metadata("design:paramtypes", [Object, file_service_1.FileService])
], BooksService);
//# sourceMappingURL=books.service.js.map