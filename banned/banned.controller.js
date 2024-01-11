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
exports.BannedController = void 0;
const common_1 = require("@nestjs/common");
const admin_auth_decorater_1 = require("../auth/guards/admin-auth.decorater");
const admin_guard_1 = require("../auth/guards/admin.guard");
const banned_service_1 = require("./banned.service");
const banned_dto_1 = require("./dto/banned.dto");
const auth_guard_1 = require("../auth/guards/auth.guard");
let BannedController = class BannedController {
    constructor(bannedService) {
        this.bannedService = bannedService;
    }
    GetAll() {
        return this.bannedService.GetAllBanned();
    }
    AddBanned(BannedUser) {
        return this.bannedService.BannUsers(BannedUser.userId, BannedUser.describtion);
    }
    GetOne(id) {
        return this.bannedService.GetOne(id);
    }
    DeleteUserById(id) {
        return this.bannedService.DeleteByUserId(id);
    }
    GetByUserId(id) {
        return this.bannedService.GetByUserId(id);
    }
    DeleteBanned(id) {
        return this.bannedService.DeleteBann(id);
    }
    EditDescribtion(id, describe) {
        return this.bannedService.UpdateDescribtion(id, describe);
    }
};
exports.BannedController = BannedController;
__decorate([
    (0, admin_auth_decorater_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BannedController.prototype, "GetAll", null);
__decorate([
    (0, admin_auth_decorater_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [banned_dto_1.BannedDto]),
    __metadata("design:returntype", void 0)
], BannedController.prototype, "AddBanned", null);
__decorate([
    (0, admin_auth_decorater_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannedController.prototype, "GetOne", null);
__decorate([
    (0, admin_auth_decorater_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannedController.prototype, "DeleteUserById", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannedController.prototype, "GetByUserId", null);
__decorate([
    (0, admin_auth_decorater_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannedController.prototype, "DeleteBanned", null);
__decorate([
    (0, admin_auth_decorater_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('describtion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BannedController.prototype, "EditDescribtion", null);
exports.BannedController = BannedController = __decorate([
    (0, common_1.Controller)('banned'),
    __metadata("design:paramtypes", [banned_service_1.BannedService])
], BannedController);
//# sourceMappingURL=banned.controller.js.map