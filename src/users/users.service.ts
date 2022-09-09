import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create.user.dto';
import {User} from './users.entity';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async getUsers() {
        return await this.userRepository.find();
    }

    async getUserById(id) {
        return await this.userRepository.findOne({id});
    }

    async createUser(dto: CreateUserDto) {
        return await this.userRepository.create(dto);
    }
}
