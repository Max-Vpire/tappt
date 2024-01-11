import { BannedsTable } from './madel/banned.madel';
export declare class BannedService {
    private bannedsRepository;
    constructor(bannedsRepository: typeof BannedsTable);
    GetAllBanned(): Promise<BannedsTable[]>;
    BannUsers(userId: string, describtion: string): Promise<BannedsTable>;
    GetOne(id: string): Promise<BannedsTable>;
    GetByUserId(userId: string): Promise<BannedsTable>;
    DeleteBann(id: string): Promise<number>;
    DeleteByUserId(userId: string): Promise<number>;
    UpdateDescribtion(idx: string, describtion: string): Promise<[affectedCount: number]>;
    isPossible(id: string): Promise<BannedsTable>;
}
