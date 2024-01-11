import { MarkedService } from './marked.service';
import { MarkedDto } from './dto/marked.dto';
export declare class MarkedController {
    private markedService;
    constructor(markedService: MarkedService);
    GetAll(): Promise<import("./madel/marked.madel").MarkedTable[]>;
    Create(MarkedBook: MarkedDto): Promise<import("./madel/marked.madel").MarkedTable>;
    GetOne(id: string): Promise<import("./madel/marked.madel").MarkedTable>;
    GetByUserId(id: string): Promise<import("./madel/marked.madel").MarkedTable>;
    GetByBookId(id: string): Promise<import("./madel/marked.madel").MarkedTable>;
    DeleteOne(id: string): Promise<number>;
    DeleteByUserId(id: string): Promise<number>;
    DeleteByBookId(id: string): Promise<number>;
}
