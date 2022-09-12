import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import {PostsService} from './posts.service';
import {SequelizeModule} from '@nestjs/sequelize';
import {Post} from './posts.model';
import {FilesService} from "../files/files.service";


@Module({
  controllers: [PostsController],
  providers: [PostsService, FilesService],
  imports: [
    SequelizeModule.forFeature([Post])
  ],
  exports: [
    PostsService,
  ],
})
export class PostsModule {}
