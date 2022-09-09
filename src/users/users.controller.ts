import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {UsersService} from "./users.service";
import {User} from './users.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @ApiOperation({summary: 'Get all users'})
    @Get()
    getAllUsers() {
        return this.usersService.getUsers();
    }

    @ApiOperation({summary: 'Get one user by id'})
    @ApiResponse({status: 200, type: User})
    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(Number(id));
    }

    @ApiOperation({summary: 'Create new user'})
    @ApiResponse({status: 201, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }
}
