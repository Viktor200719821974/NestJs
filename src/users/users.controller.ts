import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {UsersService} from './users.service';
import {JwtAuthGuard} from '../auth/jwt.auth.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Get all users'})
    @UseGuards(JwtAuthGuard)
    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Create new user'})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }
}
