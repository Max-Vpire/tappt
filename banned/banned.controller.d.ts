import { BannedService } from './banned.service';
import { BannedDto } from './dto/banned.dto';
export declare class BannedController {
    private bannedService;
    constructor(bannedService: BannedService);
    GetAll(): Promise<import("./madel/banned.madel").BannedsTable[]>;
    AddBanned(BannedUser: BannedDto): Promise<import("./madel/banned.madel").BannedsTable>;
    GetOne(id: string): Promise<import("./madel/banned.madel").BannedsTable>;
    DeleteUserById(id: string): Promise<number>;
    GetByUserId(id: string): Promise<import("./madel/banned.madel").BannedsTable>;
    DeleteBanned(id: string): Promise<number>;
    EditDescribtion(id: string, describe: string): Promise<[affectedCount: number]>;
}
