import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
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

    @ApiOperation({summary: 'Get user id'})
    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(Number(id));
    }
    @ApiOperation({summary: 'Create new user'})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }
}
