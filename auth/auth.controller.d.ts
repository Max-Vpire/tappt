import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthController {
    private authService;
    private jwtService;
    private userService;
    constructor(authService: AuthService, jwtService: JwtService, userService: UsersService);
    Register(User: RegisterDto): Promise<void>;
    Login(User: LoginDto): Promise<{
        token: string;
    }>;
    Profile(token: string): Promise<any>;
    EditProfile(NewUser: RegisterDto, idx: string): {
        token: string;
    };
}
