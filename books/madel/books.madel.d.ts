import { Model } from 'sequelize-typescript';
import { BooksDto } from '../dto/books.dto';
export declare class BooksTable extends Model<BooksDto> {
    id: string;
    name: string;
    author: string;
    path: string;
    describtion: string;
    banner: string;
    language: string;
    type: string;
}
