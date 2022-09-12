import {ApiProperty} from '@nestjs/swagger';

export class CreatePostDto {

    @ApiProperty({example: 'Name post', description: 'title'})
    readonly title: string;

    @ApiProperty({example: 'Text', description: 'content'})
    readonly content: string;

    @ApiProperty({})
    readonly userId: number;
}