import {Body, Controller, Get, Post} from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {UsersService} from "./users.service";

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Get all users'})
    @Get()
    getAllUsers() {
        return {name: 'Vasya', age: 15, status: false}
    }

    @ApiOperation({summary: 'Create new user'})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }
}
