import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import {AuthUserDto} from './dto/auth.user';
import {CreateUserDto} from '../users/dto/create.user.dto';
import {User} from "../users/users.model";

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
                private jwtService: JwtService) {
    }

    async registration(userDto: CreateUserDto) {
        const findUser = await this.usersService.getUserByEmail(userDto.email);
        if(findUser) {
           throw new HttpException('User with this email already exist', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 6);
        const user = await this.usersService.createUser({...userDto, password: hashPassword} );
        return this.generateToken(user);
    }

    async login(userDto: AuthUserDto){
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    private generateToken(user: User) {
        const payload = {email: user.email, id: user.id};
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: AuthUserDto) {
        const user = await this.usersService.getUserByEmail(userDto.email);
        const passwordEqual = await bcrypt.compare(userDto.password, user.password);
        if(!user && !passwordEqual) {
            throw new HttpException('Bad email or password', HttpStatus.BAD_REQUEST);
        }
        return user;
    }
}
