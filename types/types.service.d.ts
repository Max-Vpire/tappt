import { TypesTable } from './madel/types.madel';
export declare class TypesService {
    private typesRepository;
    constructor(typesRepository: typeof TypesTable);
    AddType(value: string): Promise<TypesTable>;
    GetAll(): Promise<TypesTable[]>;
    GetById(id: string): Promise<TypesTable>;
    SearchType(query: string): Promise<TypesTable[]>;
    Delete(id: string): Promise<number>;
}
