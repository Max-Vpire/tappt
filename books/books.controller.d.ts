import { HttpException } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksDto } from './dto/books.dto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    CreateBooks(files: any, Book: BooksDto): Promise<HttpException | import("./madel/books.madel").BooksTable>;
    GetAll(): Promise<import("./madel/books.madel").BooksTable[]>;
    GetOne(idx: string): Promise<import("./madel/books.madel").BooksTable>;
    SearchByName(name: string): Promise<import("./madel/books.madel").BooksTable[]>;
    SearchByAuthor(author: string): Promise<import("./madel/books.madel").BooksTable[]>;
    RandomBooks(): Promise<[unknown[], unknown]>;
    SelectByType(type: string): Promise<import("./madel/books.madel").BooksTable[]>;
    SelectByLanguage(language: string): Promise<import("./madel/books.madel").BooksTable[]>;
    EditBook(id: string, Book: BooksDto): Promise<[affectedCount: number]>;
    DeleteBook(id: string): Promise<number>;
}
