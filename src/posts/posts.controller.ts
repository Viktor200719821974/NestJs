import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {PostsService} from './posts.service';
import {FileInterceptor} from "@nestjs/platform-express";
import {CreatePostDto} from "./dto/create.post.dto";

@ApiTags('Posts')
@Controller('posts')
@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) {}

    @ApiOperation({summary: 'get all posts'})
    @Get()
    getAllPosts() {
        return this.postsService.getAllPost();
    }

    @ApiOperation({summary: 'create new post'})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
        return this.postsService.createPost(dto, image);
    }
}
