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
exports.languageController = void 0;
const common_1 = require("@nestjs/common");
const language_service_1 = require("./language.service");
const admin_auth_decorater_1 = require("../auth/guards/admin-auth.decorater");
const admin_guard_1 = require("../auth/guards/admin.guard");
const auth_guard_1 = require("../auth/guards/auth.guard");
let languageController = class languageController {
    constructor(languageService) {
        this.languageService = languageService;
    }
    AddLanguage(value) {
        return this.languageService.AddLanguage(value);
    }
    GetAll() {
        return this.languageService.GetAll();
    }
    GetByI(id) {
        return this.languageService.GetById(id);
    }
    SearchLanguage(value) {
        return this.languageService.SearchLanguage(value);
    }
    Delete(id) {
        return this.languageService.Delete(id);
    }
};
exports.languageController = languageController;
__decorate([
    (0, admin_auth_decorater_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], languageController.prototype, "AddLanguage", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], languageController.prototype, "GetAll", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], languageController.prototype, "GetByI", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)('/search'),
    __param(0, (0, common_1.Query)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], languageController.prototype, "SearchLanguage", null);
__decorate([
    (0, admin_auth_decorater_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], languageController.prototype, "Delete", null);
exports.languageController = languageController = __decorate([
    (0, common_1.Controller)('/langauge'),
    __metadata("design:paramtypes", [language_service_1.langaugeService])
], languageController);
//# sourceMappingURL=language.controller.js.map