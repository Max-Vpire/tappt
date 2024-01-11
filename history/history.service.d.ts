import { HistoryTable } from "./madel/history.madel";
import { HistoryDto } from './dto/history.dto';
export declare class HistoryService {
    private historyRepository;
    constructor(historyRepository: typeof HistoryTable);
    create(history: HistoryDto): Promise<any>;
    GetAll(): Promise<HistoryTable[]>;
    GetOne(idx: string): Promise<HistoryTable>;
    GetByUserId(idx: string): Promise<HistoryTable[]>;
    GetByBookId(idx: string): Promise<HistoryTable>;
    DeleteOne(idx: string): Promise<number>;
    DeleteByUserId(idx: string): Promise<number>;
    DeleteByBookId(idx: string): Promise<void>;
    RefrshSame(bookID: string, userID: string): Promise<void>;
}
