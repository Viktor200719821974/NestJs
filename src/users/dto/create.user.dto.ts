import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.com', description: 'email'})
    @IsString({message: 'Email must be string'})
    @IsEmail({}, {message: 'Incorrect email'})
    readonly email: string;

    @ApiProperty({example: 'password11', description: 'password'})
    @IsString({message: 'Password must be string'})
    @Length(4,15, {message: 'Password must be long min 4 and max 15'})
    readonly password: string;

    @ApiProperty({example: 'Sumy', description: 'city'})
    @IsString({message: 'City must be string'})
    readonly city: string;

    @ApiProperty({})
    @IsBoolean({message: 'Status must be boolean'})
    readonly status: boolean;
}