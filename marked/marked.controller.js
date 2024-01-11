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
exports.MarkedController = void 0;
const common_1 = require("@nestjs/common");
const marked_service_1 = require("./marked.service");
const auth_guard_1 = require("../auth/guards/auth.guard");
const marked_dto_1 = require("./dto/marked.dto");
let MarkedController = class MarkedController {
    constructor(markedService) {
        this.markedService = markedService;
    }
    GetAll() {
        return this.markedService.GetAll();
    }
    Create(MarkedBook) {
        return this.markedService.create(MarkedBook);
    }
    GetOne(id) {
        return this.markedService.GetOne(id);
    }
    GetByUserId(id) {
        return this.markedService.GetByUserId(id);
    }
    GetByBookId(id) {
        return this.markedService.GetByBookId(id);
    }
    DeleteOne(id) {
        return this.markedService.DeleteOne(id);
    }
    DeleteByUserId(id) {
        return this.markedService.DeleteByUserId(id);
    }
    DeleteByBookId(id) {
        return this.markedService.DeleteByBookId(id);
    }
};
exports.MarkedController = MarkedController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MarkedController.prototype, "GetAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [marked_dto_1.MarkedDto]),
    __metadata("design:returntype", void 0)
], MarkedController.prototype, "Create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarkedController.prototype, "GetOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarkedController.prototype, "GetByUserId", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('book/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarkedController.prototype, "GetByBookId", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarkedController.prototype, "DeleteOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarkedController.prototype, "DeleteByUserId", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('book/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarkedController.prototype, "DeleteByBookId", null);
exports.MarkedController = MarkedController = __decorate([
    (0, common_1.Controller)('marked'),
    __metadata("design:paramtypes", [marked_service_1.MarkedService])
], MarkedController);
//# sourceMappingURL=marked.controller.js.map