import { langaugeService } from "./language.service";
export declare class languageController {
    private languageService;
    constructor(languageService: langaugeService);
    AddLanguage(value: string): Promise<import("./madel/language.madel").LanguageTable>;
    GetAll(): Promise<import("./madel/language.madel").LanguageTable[]>;
    GetByI(id: string): Promise<import("./madel/language.madel").LanguageTable>;
    SearchLanguage(value: string): Promise<import("./madel/language.madel").LanguageTable[]>;
    Delete(id: string): Promise<number>;
}
