import { Model } from "sequelize-typescript";
import { MarkedDto } from "../dto/marked.dto";
export declare class MarkedTable extends Model<MarkedDto> {
    id: string;
    userId: string;
    bookId: string;
}
