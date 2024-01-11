import { Model } from "sequelize-typescript";
import { TypesDto } from "../dto/types.dto";
export declare class TypesTable extends Model<TypesDto> {
    id: string;
    value: string;
}
