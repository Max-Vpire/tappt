import { HttpException } from '@nestjs/common';
import { BooksTable } from './madel/books.madel';
import { BooksDto } from './dto/books.dto';
import { FileService } from 'src/file/file.service';
export declare class BooksService {
    private booksReporitory;
    private fileService;
    constructor(booksReporitory: typeof BooksTable, fileService: FileService);
    create(Books: BooksDto, banner: any, book: any): Promise<HttpException | BooksTable>;
    GetAll(): Promise<BooksTable[]>;
    GetOne(idx: string): Promise<BooksTable>;
    SearchByName(name: string): Promise<BooksTable[]>;
    SearchByAuthor(author: string): Promise<BooksTable[]>;
    RandomSelect(): Promise<[unknown[], unknown]>;
    EditBook(id: string, book: BooksDto): Promise<[affectedCount: number]>;
    DeleteBook(id: string): Promise<number>;
    SelectByType(type: string): Promise<BooksTable[]>;
    SelectByLanguage(language: string): Promise<BooksTable[]>;
}
