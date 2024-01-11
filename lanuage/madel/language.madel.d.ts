import { Model } from 'sequelize-typescript';
import { LanguageDto } from '../dto/language.dto';
export declare class LanguageTable extends Model<LanguageDto> {
    id: string;
    value: string;
}
