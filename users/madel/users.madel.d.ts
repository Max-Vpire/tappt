import { Model } from 'sequelize-typescript';
import { UserDto } from '../dto/users.dto';
export declare class UsersTable extends Model<UserDto> {
    id: string;
    name: string;
    surname: string;
    number: number;
    password: string;
    role: string;
}
