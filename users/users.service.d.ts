import { UsersTable } from './madel/users.madel';
import { RegisterDto } from 'src/auth/dto/register.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof UsersTable);
    AddUser(User: RegisterDto): Promise<UsersTable>;
    GetAll(): Promise<UsersTable[]>;
    GetOne(idx: string): Promise<UsersTable>;
    editUser(idx: string, User: RegisterDto): Promise<[affectedCount: number]>;
    getUserByNumber(number: number): Promise<UsersTable>;
    DeleteUser(idx: string): Promise<number>;
}
