import {ApiProperty} from '@nestjs/swagger';

export class CreatePostDto {

    @ApiProperty({example: 'user@mail.com', description: 'email'})
    readonly title: string;

    @ApiProperty({example: 'password11', description: 'password'})
    readonly content: string;

    @ApiProperty({})
    readonly userId: number;
}