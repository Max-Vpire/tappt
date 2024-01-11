"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = exports.FileType = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const fs = require("fs");
const uuid_1 = require("uuid");
var FileType;
(function (FileType) {
    FileType["BOOK"] = "book";
    FileType["BANNER"] = "banner";
})(FileType || (exports.FileType = FileType = {}));
let FileService = class FileService {
    CreateFile(type, file) {
        try {
            const FileException = file.originalname.split('.').pop();
            const FileName = (0, uuid_1.v4)() + '.' + FileException;
            const FilePath = path.resolve(__dirname, '..', 'discover', type);
            if (!fs.existsSync(FilePath)) {
                fs.mkdirSync(FilePath, { recursive: true });
            }
            fs.writeFileSync(path.resolve(FilePath, FileName), file.buffer);
            return type + '/' + FileName;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
//# sourceMappingURL=file.service.js.map