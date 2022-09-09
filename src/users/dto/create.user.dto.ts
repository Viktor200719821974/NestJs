import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.com', description: 'email'})
    readonly email: string;

    @ApiProperty({example: 'password11', description: 'password'})
    readonly password: string;

    @ApiProperty({example: 'Sumy', description: 'city'})
    readonly city: string;

    @ApiProperty()
    readonly status: boolean;
}