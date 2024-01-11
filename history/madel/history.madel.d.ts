import { Model } from "sequelize-typescript";
import { HistoryDto } from "../dto/history.dto";
export declare class HistoryTable extends Model<HistoryDto> {
    id: string;
    userId: string;
    bookId: string;
    bookpath: string;
    bookbanner: string;
}
