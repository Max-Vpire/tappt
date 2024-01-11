import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
export declare class UsersController {
    private usersService;
    private authService;
    private jwtService;
    constructor(usersService: UsersService, authService: AuthService, jwtService: JwtService);
    GetAll(): Promise<import("./madel/users.madel").UsersTable[]>;
    AddUser(User: UserDto): Promise<import("./madel/users.madel").UsersTable>;
    GetOne(idx: string): Promise<import("./madel/users.madel").UsersTable>;
    GetByNumber(number: number): Promise<import("./madel/users.madel").UsersTable>;
    UpdateUser(idx: string, NewUser: UserDto): Promise<[affectedCount: number]>;
    DeleteUser(idx: string): Promise<number>;
}
