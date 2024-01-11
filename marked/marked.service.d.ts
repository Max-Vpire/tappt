import { MarkedTable } from './madel/marked.madel';
import { MarkedDto } from './dto/marked.dto';
export declare class MarkedService {
    private markedRepository;
    constructor(markedRepository: typeof MarkedTable);
    create(data: MarkedDto): Promise<MarkedTable>;
    GetAll(): Promise<MarkedTable[]>;
    GetOne(idx: string): Promise<MarkedTable>;
    GetByUserId(idx: string): Promise<MarkedTable>;
    GetByBookId(idx: string): Promise<MarkedTable>;
    DeleteOne(idx: string): Promise<number>;
    DeleteByUserId(idx: string): Promise<number>;
    DeleteByBookId(idx: string): Promise<number>;
}
