import { TypesService } from './types.service';
export declare class TypesController {
    private typesService;
    constructor(typesService: TypesService);
    AddLanguage(value: string): Promise<import("./madel/types.madel").TypesTable>;
    GetAll(): Promise<import("./madel/types.madel").TypesTable[]>;
    GetByI(id: string): Promise<import("./madel/types.madel").TypesTable>;
    SearchLanguage(value: string): Promise<import("./madel/types.madel").TypesTable[]>;
    Delete(id: string): Promise<number>;
}
