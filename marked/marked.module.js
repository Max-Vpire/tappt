"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkedModule = void 0;
const common_1 = require("@nestjs/common");
const marked_controller_1 = require("./marked.controller");
const marked_service_1 = require("./marked.service");
const sequelize_1 = require("@nestjs/sequelize");
const marked_madel_1 = require("./madel/marked.madel");
let MarkedModule = class MarkedModule {
};
exports.MarkedModule = MarkedModule;
exports.MarkedModule = MarkedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([marked_madel_1.MarkedTable])
        ],
        controllers: [marked_controller_1.MarkedController],
        providers: [marked_service_1.MarkedService]
    })
], MarkedModule);
//# sourceMappingURL=marked.module.js.map