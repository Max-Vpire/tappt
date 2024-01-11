import { Model } from 'sequelize-typescript';
import { BannedDto } from '../dto/banned.dto';
export declare class BannedsTable extends Model<BannedDto> {
    id: string;
    userId: string;
    describtion: string;
}
