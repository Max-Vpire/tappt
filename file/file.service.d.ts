export declare enum FileType {
    BOOK = "book",
    BANNER = "banner"
}
export declare class FileService {
    CreateFile(type: FileType, file: any): string;
}
