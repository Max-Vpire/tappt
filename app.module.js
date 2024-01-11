"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const users_madel_1 = require("./users/madel/users.madel");
const auth_module_1 = require("./auth/auth.module");
const banned_module_1 = require("./banned/banned.module");
const banned_madel_1 = require("./banned/madel/banned.madel");
const books_module_1 = require("./books/books.module");
const books_madel_1 = require("./books/madel/books.madel");
const file_module_1 = require("./file/file.module");
const serve_static_1 = require("@nestjs/serve-static");
const lanuage_module_1 = require("./lanuage/lanuage.module");
const path = require("path");
const language_madel_1 = require("./lanuage/madel/language.madel");
const marked_module_1 = require("./marked/marked.module");
const marked_madel_1 = require("./marked/madel/marked.madel");
const history_module_1 = require("./history/history.module");
const history_madel_1 = require("./history/madel/history.madel");
const types_module_1 = require("./types/types.module");
const types_madel_1 = require("./types/madel/types.madel");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                secret: 'secret',
                signOptions: { expiresIn: '30d' },
            }),
            serve_static_1.ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'discover') }),
            config_1.ConfigModule.forRoot({ envFilePath: '.env' }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                port: 5432,
                autoLoadModels: true,
                uri: 'postgresql://olimjonmakhmudov26156:AP9rK6mNeVTR@ep-red-wildflower-993389-pooler.us-east-2.aws.neon.tech/tappt?sslmode=require',
                models: [
                    users_madel_1.UsersTable,
                    banned_madel_1.BannedsTable,
                    books_madel_1.BooksTable,
                    language_madel_1.LanguageTable,
                    marked_madel_1.MarkedTable,
                    history_madel_1.HistoryTable,
                    types_madel_1.TypesTable
                ],
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            banned_module_1.BannedModule,
            books_module_1.BooksModule,
            file_module_1.FileModule,
            lanuage_module_1.LanuageModule,
            marked_module_1.MarkedModule,
            history_module_1.HistoryModule,
            types_module_1.TypesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
