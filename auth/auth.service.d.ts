import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { UserDto } from 'src/users/dto/users.dto';
import { LoginDto } from './dto/login.dto';
import { UsersTable } from 'src/users/madel/users.madel';
export declare class AuthService {
    private jwtService;
    private usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    Register(User: RegisterDto): Promise<void>;
    generteToken(user: UserDto): Promise<{
        token: string;
    }>;
    login(authDto: LoginDto): Promise<{
        token: string;
    }>;
    ValidateUser(authDto: LoginDto): Promise<UsersTable>;
    VerifyToken(token: string): Promise<any>;
    EditProfile(user: RegisterDto): {
        token: string;
    };
}
