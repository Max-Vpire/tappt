import { LanguageTable } from "./madel/language.madel";
export declare class langaugeService {
    private LanguageRepository;
    constructor(LanguageRepository: typeof LanguageTable);
    AddLanguage(value: string): Promise<LanguageTable>;
    GetAll(): Promise<LanguageTable[]>;
    GetById(id: string): Promise<LanguageTable>;
    SearchLanguage(query: string): Promise<LanguageTable[]>;
    Delete(id: string): Promise<number>;
}
