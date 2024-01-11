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
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const books_dto_1 = require("./dto/books.dto");
const platform_express_1 = require("@nestjs/platform-express");
const admin_auth_decorater_1 = require("../auth/guards/admin-auth.decorater");
const admin_guard_1 = require("../auth/guards/admin.guard");
const auth_guard_1 = require("../auth/guards/auth.guard");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    CreateBooks(files, Book) {
        const { banner, book } = files;
        if (banner === undefined || book === undefined) {
            throw new common_1.HttpException('empty', common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            return this.booksService.create(Book, banner[0], book[0]);
        }
    }
    GetAll() {
        return this.booksService.GetAll();
    }
    GetOne(idx) {
        return this.booksService.GetOne(idx);
    }
    SearchByName(name) {
        return this.booksService.SearchByName(name);
    }
    SearchByAuthor(author) {
        return this.booksService.SearchByAuthor(author);
    }
    RandomBooks() {
        return this.booksService.RandomSelect();
    }
    SelectByType(type) {
        return this.booksService.SelectByType(type);
    }
    SelectByLanguage(language) {
        return this.booksService.SelectByLanguage(language);
    }
    EditBook(id, Book) {
        return this.booksService.EditBook(id, Book);
    }
    DeleteBook(id) {
        return this.booksService.DeleteBook(id);
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, admin_auth_decorater_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'banner', maxCount: 1 },
        { name: 'book', maxCount: 1 }
    ])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, books_dto_1.BooksDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "CreateBooks", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "GetAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('api/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "GetOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/search/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "SearchByName", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/author/'),
    __param(0, (0, common_1.Query)('author')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "SearchByAuthor", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/recomends'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "RandomBooks", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/type/:type'),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "SelectByType", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/language/:language'),
    __param(0, (0, common_1.Param)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "SelectByLanguage", null);
__decorate([
    (0, admin_auth_decorater_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, books_dto_1.BooksDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "EditBook", null);
__decorate([
    (0, admin_auth_decorater_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "DeleteBook", null);
exports.BooksController = BooksController = __decorate([
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
//# sourceMappingURL=books.controller.js.map