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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_madel_1 = require("./madel/users.madel");
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async AddUser(User) {
        const hashedPassword = await bcrypt.hash(User.password, 10);
        let CreatingUser = {
            id: (0, uuid_1.v4)(),
            name: User.name,
            surname: User.surname,
            number: User.number,
            password: hashedPassword,
            role: 'USER'
        };
        let AddedUser = await this.userRepository.create(CreatingUser);
        return AddedUser;
    }
    async GetAll() {
        const Users = await this.userRepository.findAll();
        return Users;
    }
    async GetOne(idx) {
        const GetOne = await this.userRepository.findOne({ where: { id: idx } });
        return GetOne;
    }
    async editUser(idx, User) {
        const hashedPassword = await bcrypt.hash(User.password, 10);
        const Edituser = await this.userRepository.update({
            name: User.name,
            surname: User.surname,
            password: hashedPassword,
        }, {
            where: {
                id: idx
            }
        });
        return Edituser;
    }
    async getUserByNumber(number) {
        const User = await this.userRepository.findOne({ where: { number: number } });
        return User;
    }
    async DeleteUser(idx) {
        const Deleteuser = await this.userRepository.destroy({ where: { id: idx } });
        return Deleteuser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_madel_1.UsersTable)),
    __metadata("design:paramtypes", [Object])
], UsersService);
//# sourceMappingURL=users.service.js.map